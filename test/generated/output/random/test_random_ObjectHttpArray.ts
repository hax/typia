import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_random_ObjectHttpArray = _test_random(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<ObjectHttpArray> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                booleans: (generator?.array ?? $generator.array)(() =>
                    (generator?.boolean ?? $generator.boolean)(),
                ),
                bigints: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.bigint?.(
                            [],
                        ) ??
                        (generator?.bigint ?? $generator.bigint)(
                            BigInt(0),
                            BigInt(100),
                        ),
                ),
                numbers: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.(
                            [],
                        ) ?? (generator?.number ?? $generator.number)(0, 100),
                ),
                strings: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.(
                            [],
                        ) ?? (generator?.string ?? $generator.string)(),
                ),
                templates: (generator?.array ?? $generator.array)(
                    () =>
                        `something_${
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                            (generator?.string ?? $generator.string)()
                        }`,
                ),
            });
            return $ro0();
        })(),
    assert: (input: any): ObjectHttpArray => {
        const __is = (input: any): input is ObjectHttpArray => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.booleans) &&
                input.booleans.every(
                    (elem: any) => "boolean" === typeof elem,
                ) &&
                Array.isArray(input.bigints) &&
                input.bigints.every((elem: any) => "bigint" === typeof elem) &&
                Array.isArray(input.numbers) &&
                input.numbers.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                Array.isArray(input.strings) &&
                input.strings.every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.templates) &&
                input.templates.every(
                    (elem: any) =>
                        "string" === typeof elem &&
                        RegExp(/^something_(.*)/).test(elem),
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectHttpArray => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.booleans) ||
                        $guard(_exceptionable, {
                            path: _path + ".booleans",
                            expected: "Array<boolean>",
                            value: input.booleans,
                        })) &&
                        input.booleans.every(
                            (elem: any, _index1: number) =>
                                "boolean" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + ".booleans[" + _index1 + "]",
                                    expected: "boolean",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".booleans",
                            expected: "Array<boolean>",
                            value: input.booleans,
                        })) &&
                    (((Array.isArray(input.bigints) ||
                        $guard(_exceptionable, {
                            path: _path + ".bigints",
                            expected: "Array<bigint>",
                            value: input.bigints,
                        })) &&
                        input.bigints.every(
                            (elem: any, _index2: number) =>
                                "bigint" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + ".bigints[" + _index2 + "]",
                                    expected: "bigint",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".bigints",
                            expected: "Array<bigint>",
                            value: input.bigints,
                        })) &&
                    (((Array.isArray(input.numbers) ||
                        $guard(_exceptionable, {
                            path: _path + ".numbers",
                            expected: "Array<number>",
                            value: input.numbers,
                        })) &&
                        input.numbers.every(
                            (elem: any, _index3: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".numbers[" + _index3 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".numbers",
                            expected: "Array<number>",
                            value: input.numbers,
                        })) &&
                    (((Array.isArray(input.strings) ||
                        $guard(_exceptionable, {
                            path: _path + ".strings",
                            expected: "Array<string>",
                            value: input.strings,
                        })) &&
                        input.strings.every(
                            (elem: any, _index4: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + ".strings[" + _index4 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".strings",
                            expected: "Array<string>",
                            value: input.strings,
                        })) &&
                    (((Array.isArray(input.templates) ||
                        $guard(_exceptionable, {
                            path: _path + ".templates",
                            expected: "Array<`something_${string}`>",
                            value: input.templates,
                        })) &&
                        input.templates.every(
                            (elem: any, _index5: number) =>
                                ("string" === typeof elem &&
                                    RegExp(/^something_(.*)/).test(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".templates[" + _index5 + "]",
                                    expected: "`something_${string}`",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".templates",
                            expected: "Array<`something_${string}`>",
                            value: input.templates,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectHttpArray",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectHttpArray",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
