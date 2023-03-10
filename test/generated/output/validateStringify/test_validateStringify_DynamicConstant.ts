import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_validateStringify_DynamicConstant = _test_validateStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: {
            a: number;
            b: number;
            c: number;
            d: number;
        }): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<{
                a: number;
                b: number;
                c: number;
                d: number;
            }> => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is { a: number; b: number; c: number; d: number } => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.a &&
                                Number.isFinite(input.a)) ||
                                $report(_exceptionable, {
                                    path: _path + ".a",
                                    expected: "number",
                                    value: input.a,
                                }),
                            ("number" === typeof input.b &&
                                Number.isFinite(input.b)) ||
                                $report(_exceptionable, {
                                    path: _path + ".b",
                                    expected: "number",
                                    value: input.b,
                                }),
                            ("number" === typeof input.c &&
                                Number.isFinite(input.c)) ||
                                $report(_exceptionable, {
                                    path: _path + ".c",
                                    expected: "number",
                                    value: input.c,
                                }),
                            ("number" === typeof input.d &&
                                Number.isFinite(input.d)) ||
                                $report(_exceptionable, {
                                    path: _path + ".d",
                                    expected: "number",
                                    value: input.d,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "DynamicConstant",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "DynamicConstant",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: {
                a: number;
                b: number;
                c: number;
                d: number;
            }): string => {
                const $number = (typia.validateStringify as any).number;
                const $so0 = (input: any): any =>
                    `{"a":${$number(input.a)},"b":${$number(
                        input.b,
                    )},"c":${$number(input.c)},"d":${$number(input.d)}}`;
                return $so0(input);
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    DynamicConstant.SPOILERS,
);
