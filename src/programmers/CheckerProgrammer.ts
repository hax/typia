import ts from "typescript";
import { IMetadata } from "../structures/IMetadata";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";
import { FeatureProgrammer } from "./FeatureProgrammer";

export namespace CheckerProgrammer {
    export interface IConfig {
        trace: boolean;
        functors: {
            name: string;
            filter?: (object: IMetadata.IObject) => boolean;
        };
        combiner: IConfig.Combiner;
    }
    export namespace IConfig {
        export interface Combiner {
            (explorer: IExplore): {
                (type: "and" | "or"): {
                    (
                        input: ts.Expression,
                        expressions: ts.Expression[],
                    ): ts.Expression;
                };
            };
        }
    }
    export import IExplore = FeatureProgrammer.IExplore;

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export function generate(config: IConfig) {
        return FeatureProgrammer.generate(base_config(config));
    }

    export function generate_functors(config: IConfig) {
        return FeatureProgrammer.generate_functors(base_config(config));
    }

    function base_config(config: IConfig): FeatureProgrammer.IConfig {
        return {
            initializer: ({ checker }, type) => {
                const collection: MetadataCollection = new MetadataCollection();
                const meta: IMetadata = MetadataFactory.generate(
                    checker,
                    collection,
                    type,
                    {
                        resolve: false,
                        constant: true,
                    },
                );
                return [collection, meta];
            },
            trace: config.trace,
            functors: config.functors,
            joiner: (entries) =>
                entries.length
                    ? entries
                          .map((entry) => entry.expression)
                          .reduce((x, y) => ts.factory.createLogicalAnd(x, y))
                    : ts.factory.createTrue(),
            decoder: decode(config),
        };
    }

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export function decode(config: IConfig) {
        return function (
            input: ts.Expression,
            meta: IMetadata,
            explore: IExplore,
        ): ts.Expression {
            if (meta.any) return ValueFactory.BOOLEAN(true);
            explore.tracable = explore.tracable && IMetadata.size(meta) === 1;

            const top: ts.Expression[] = [];
            const binaries: ts.Expression[] = [];
            const add = create_add(binaries)(input);
            const constant = (value: number | string | bigint | boolean) =>
                typeof value === "string"
                    ? ts.factory.createStringLiteral(value)
                    : ts.factory.createIdentifier(value.toString());

            const size: number = IMetadata.size(meta);

            // NULLBLE AND UNDEFINDABLE
            if (meta.nullable === true || meta.objects.size || size === 0)
                (meta.nullable ? add : create_add(top)(input))(
                    meta.nullable,
                    ValueFactory.NULL(),
                );
            if (meta.required === false || meta.objects.size || size === 0)
                (meta.required ? create_add(top)(input) : add)(
                    !meta.required,
                    ValueFactory.UNDEFINED(),
                );

            // CONSTANT VALUES
            for (const values of meta.constants.values())
                for (const val of values) add(true, constant(val));

            // ATOMIC VALUES
            for (const type of meta.atomics)
                add(
                    true,
                    ts.factory.createStringLiteral(type),
                    ValueFactory.TYPEOF(input),
                );

            // ARRAY OR TUPLE
            if (meta.arraies.size + meta.tuples.size > 0) {
                const inner: ts.Expression[] = [];
                for (const [key, tuple] of meta.tuples.entries()) {
                    if (meta.atomics.has(key)) continue;
                    inner.push(decode_tuple(config)(input, tuple, explore));
                }
                for (const array of meta.arraies.values())
                    inner.push(decode_array(config)(input, array, explore));

                // ADD
                binaries.push(
                    ts.factory.createLogicalAnd(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("Array.isArray"),
                            undefined,
                            [input],
                        ),
                        inner.length === 0
                            ? inner[0]!
                            : inner.reduce((x, y) =>
                                  ts.factory.createLogicalOr(x, y),
                              ),
                    ),
                );
            }

            // OBJECT
            if (meta.objects.size > 0) {
                const outer: ts.Expression[] = [];
                if (meta.nullable === false)
                    create_add(outer)(input)(false, ValueFactory.NULL());
                create_add(outer)(input)(
                    true,
                    ts.factory.createStringLiteral("object"),
                    ValueFactory.TYPEOF(input),
                );

                const inner: ts.Expression[] = [];
                for (const [obj] of meta.objects.values())
                    inner.push(decode_object(config)(input, obj, explore));

                binaries.push(
                    config.combiner({ ...explore, tracable: false })("and")(
                        input,
                        [
                            ...outer,
                            config.combiner({ ...explore, tracable: false })(
                                "or",
                            )(input, inner),
                        ],
                    ),
                );
            }

            // COMBINE CONDITIONS
            return top.length !== 0
                ? config.combiner(explore)("and")(input, [
                      ...top,
                      config.combiner({
                          ...explore,
                          tracable: false,
                      })("or")(input, binaries),
                  ])
                : config.combiner(explore)("or")(input, binaries);
        };
    }

    function decode_tuple(config: IConfig) {
        return function (
            input: ts.Expression,
            tuple: Array<IMetadata>,
            explore: IExplore,
        ): ts.Expression {
            const length = ts.factory.createStrictEquality(
                ts.factory.createPropertyAccessExpression(input, "length"),
                ts.factory.createNumericLiteral(tuple.length),
            );
            const binaries: ts.Expression[] = tuple.map((meta, index) =>
                decode(config)(
                    ts.factory.createElementAccessExpression(input, index),
                    meta,
                    {
                        ...explore,
                        from: "array",
                        postfix: explore.postfix.length
                            ? `${explore.postfix.slice(0, -1)}[${index}]"`
                            : `"[${index}]"`,
                    },
                ),
            );
            if (binaries.length === 0) return length;
            else
                return [length, ...binaries].reduce((x, y) =>
                    ts.factory.createLogicalAnd(x, y),
                );
        };
    }

    function decode_array(config: IConfig) {
        return FeatureProgrammer.decode_array(
            base_config(config),
            (input, arrow) =>
                ts.factory.createCallExpression(
                    IdentifierFactory.join(input, "every"),
                    undefined,
                    [arrow],
                ),
        );
    }

    function decode_object(config: IConfig) {
        const func = FeatureProgrammer.decode_object(base_config(config));
        return function (
            input: ts.Expression,
            obj: IMetadata.IObject,
            explore: IExplore,
        ) {
            obj.validated = true;
            return func(input, obj, explore);
        };
    }
}

const create_add =
    (binaries: ts.Expression[]) =>
    (defaultInput: ts.Expression) =>
    (
        exact: boolean,
        left: ts.Expression,
        right: ts.Expression = defaultInput,
    ) => {
        const factory = exact
            ? ts.factory.createStrictEquality
            : ts.factory.createStrictInequality;
        binaries.push(factory(left, right));
    };
