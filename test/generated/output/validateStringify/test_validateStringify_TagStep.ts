import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { TagStep } from "../../../structures/TagStep";

export const test_validateStringify_TagStep = _test_validateStringify(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: Array<TagStep.Type>): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<TagStep.Type>> => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<TagStep.Type> => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.exclusiveMinimum &&
                                0 === (input.exclusiveMinimum % 5) - 3 &&
                                3 < input.exclusiveMinimum) ||
                                $report(_exceptionable, {
                                    path: _path + ".exclusiveMinimum",
                                    expected: "number",
                                    value: input.exclusiveMinimum,
                                }),
                            ("number" === typeof input.minimum &&
                                0 === (input.minimum % 5) - 3 &&
                                3 <= input.minimum) ||
                                $report(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "number",
                                    value: input.minimum,
                                }),
                            ("number" === typeof input.range &&
                                0 === (input.range % 5) - 0 &&
                                0 < input.range &&
                                100 > input.range) ||
                                $report(_exceptionable, {
                                    path: _path + ".range",
                                    expected: "number",
                                    value: input.range,
                                }),
                            ("number" === typeof input.multipleOf &&
                                0 === input.multipleOf % 5 &&
                                3 <= input.multipleOf &&
                                99 >= input.multipleOf) ||
                                $report(_exceptionable, {
                                    path: _path + ".multipleOf",
                                    expected: "number",
                                    value: input.multipleOf,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<TagStep.Type>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "TagStep.Type",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagStep.Type",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<TagStep.Type>",
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
            const stringify = (input: Array<TagStep.Type>): string => {
                const $number = (typia.validateStringify as any).number;
                const $so0 = (input: any): any =>
                    `{"exclusiveMinimum":${$number(
                        input.exclusiveMinimum,
                    )},"minimum":${$number(input.minimum)},"range":${$number(
                        input.range,
                    )},"multipleOf":${$number(input.multipleOf)}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    TagStep.SPOILERS,
);
