import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_assert_ConstantIntersection = _test_assert(
    "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
    ((input: any): ConstantIntersection => {
        const __is = (input: any): input is ConstantIntersection => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                false === input[0] &&
                1 === input[1] &&
                "two" === input[2]
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ConstantIntersection => {
                const $guard = (typia.assert as any).guard;
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ConstantIntersection",
                            value: input,
                        })) &&
                        (input.length === 3 ||
                            $guard(true, {
                                path: _path + "",
                                expected: '[false, 1, "two"]',
                                value: input,
                            })) &&
                        (false === input[0] ||
                            $guard(true, {
                                path: _path + "[0]",
                                expected: "false",
                                value: input[0],
                            })) &&
                        (1 === input[1] ||
                            $guard(true, {
                                path: _path + "[1]",
                                expected: "1",
                                value: input[1],
                            })) &&
                        ("two" === input[2] ||
                            $guard(true, {
                                path: _path + "[2]",
                                expected: '"two"',
                                value: input[2],
                            }))) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ConstantIntersection",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    })(input),
);
