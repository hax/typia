import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_validateStringify_ConstantIntersection =
    _test_json_validateStringify("ConstantIntersection")<ConstantIntersection>(
        ConstantIntersection,
    )((input) =>
        ((input: ConstantIntersection): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<ConstantIntersection> => {
                const errors = [] as any[];
                const __is = (input: any): input is ConstantIntersection => {
                    return (
                        Array.isArray(input) &&
                        input.length === 3 &&
                        false === input[0] &&
                        1 === input[1] &&
                        "two" === input[2]
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.json.validateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ConstantIntersection => {
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ConstantIntersection",
                                    value: input,
                                })) &&
                                (input.length === 3 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: '[false, 1, "two"]',
                                        value: input,
                                    })) &&
                                [
                                    false === input[0] ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected: "false",
                                            value: input[0],
                                        }),
                                    1 === input[1] ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected: "1",
                                            value: input[1],
                                        }),
                                    "two" === input[2] ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected: '"two"',
                                            value: input[2],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ConstantIntersection",
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
            const stringify = (input: ConstantIntersection): string => {
                const $number = (typia.json.validateStringify as any).number;
                const $string = (typia.json.validateStringify as any).string;
                const $throws = (typia.json.validateStringify as any).throws;
                return `[${input[0]},${$number(input[1])},${(() => {
                    if ("string" === typeof input[2]) return $string(input[2]);
                    if ("string" === typeof input[2])
                        return '"' + input[2] + '"';
                    $throws({
                        expected: '"two"',
                        value: input[2],
                    });
                })()}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    );
