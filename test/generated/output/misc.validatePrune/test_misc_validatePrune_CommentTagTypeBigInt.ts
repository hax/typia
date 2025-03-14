import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_misc_validatePrune_CommentTagTypeBigInt =
    _test_misc_validatePrune("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )((input) =>
        ((input: any): typia.IValidation<CommentTagTypeBigInt> => {
            const validate = (
                input: any,
            ): typia.IValidation<CommentTagTypeBigInt> => {
                const errors = [] as any[];
                const __is = (input: any): input is CommentTagTypeBigInt => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "bigint" === typeof (input as any).in64 &&
                        "bigint" === typeof (input as any).uint64 &&
                        BigInt(0) <= (input as any).uint64
                    );
                };
                if (false === __is(input)) {
                    const $report = (typia.misc.validatePrune as any).report(
                        errors,
                    );
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is CommentTagTypeBigInt => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "bigint" === typeof input.in64 ||
                                    $report(_exceptionable, {
                                        path: _path + ".in64",
                                        expected: "bigint",
                                        value: input.in64,
                                    }),
                                ("bigint" === typeof input.uint64 &&
                                    (BigInt(0) <= input.uint64 ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint64",
                                            expected: 'bigint & Type<"uint64">',
                                            value: input.uint64,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint64",
                                        expected: '(bigint & Type<"uint64">)',
                                        value: input.uint64,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "CommentTagTypeBigInt",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "CommentTagTypeBigInt",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune = (input: CommentTagTypeBigInt): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("in64" === key || "uint64" === key) continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    );
