import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_json_createValidateStringify_CommentTagArray =
    _test_json_validateStringify("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )((input: CommentTagArray): typia.IValidation<string> => {
        const validate = (input: any): typia.IValidation<CommentTagArray> => {
            const errors = [] as any[];
            const __is = (input: any): input is CommentTagArray => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    Array.isArray(input.items) &&
                    3 <= input.items.length &&
                    input.items.length <= 3 &&
                    input.items.every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
                    Array.isArray(input.minItems) &&
                    3 <= input.minItems.length &&
                    input.minItems.every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    Array.isArray(input.both) &&
                    3 <= input.both.length &&
                    input.both.length <= 7 &&
                    input.both.every((elem: any) => "string" === typeof elem) &&
                    Array.isArray(input.equal) &&
                    10 <= input.equal.length &&
                    input.equal.length <= 10 &&
                    input.equal.every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    );
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input)) {
                const $report = (
                    typia.json.createValidateStringify as any
                ).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is CommentTagArray => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.value) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Array<CommentTagArray.Type>",
                                    value: input.value,
                                })) &&
                                input.value
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "CommentTagArray.Type",
                                                    value: elem,
                                                })) &&
                                                $vo1(
                                                    elem,
                                                    _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "CommentTagArray.Type",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "Array<CommentTagArray.Type>",
                                    value: input.value,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.items) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected:
                                        "(Array<string> & MinItems<3> & MaxItems<3>)",
                                    value: input.items,
                                })) &&
                                (3 <= input.items.length ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<> & MinItems<3>",
                                        value: input.items,
                                    })) &&
                                (input.items.length <= 3 ||
                                    $report(_exceptionable, {
                                        path: _path + ".items",
                                        expected: "Array<> & MaxItems<3>",
                                        value: input.items,
                                    })) &&
                                input.items
                                    .map(
                                        (elem: any, _index2: number) =>
                                            "string" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".items[" +
                                                    _index2 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".items",
                                    expected:
                                        "(Array<string> & MinItems<3> & MaxItems<3>)",
                                    value: input.items,
                                }),
                            ((Array.isArray(input.minItems) ||
                                $report(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: "(Array<number> & MinItems<3>)",
                                    value: input.minItems,
                                })) &&
                                (3 <= input.minItems.length ||
                                    $report(_exceptionable, {
                                        path: _path + ".minItems",
                                        expected: "Array<> & MinItems<3>",
                                        value: input.minItems,
                                    })) &&
                                input.minItems
                                    .map(
                                        (elem: any, _index3: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".minItems[" +
                                                    _index3 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".minItems",
                                    expected: "(Array<number> & MinItems<3>)",
                                    value: input.minItems,
                                }),
                            ((Array.isArray(input.both) ||
                                $report(_exceptionable, {
                                    path: _path + ".both",
                                    expected:
                                        "(Array<string> & MinItems<3> & MaxItems<7>)",
                                    value: input.both,
                                })) &&
                                (3 <= input.both.length ||
                                    $report(_exceptionable, {
                                        path: _path + ".both",
                                        expected: "Array<> & MinItems<3>",
                                        value: input.both,
                                    })) &&
                                (input.both.length <= 7 ||
                                    $report(_exceptionable, {
                                        path: _path + ".both",
                                        expected: "Array<> & MaxItems<7>",
                                        value: input.both,
                                    })) &&
                                input.both
                                    .map(
                                        (elem: any, _index4: number) =>
                                            "string" === typeof elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".both[" +
                                                    _index4 +
                                                    "]",
                                                expected: "string",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".both",
                                    expected:
                                        "(Array<string> & MinItems<3> & MaxItems<7>)",
                                    value: input.both,
                                }),
                            ((Array.isArray(input.equal) ||
                                $report(_exceptionable, {
                                    path: _path + ".equal",
                                    expected:
                                        "(Array<number> & MinItems<10> & MaxItems<10>)",
                                    value: input.equal,
                                })) &&
                                (10 <= input.equal.length ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "Array<> & MinItems<10>",
                                        value: input.equal,
                                    })) &&
                                (input.equal.length <= 10 ||
                                    $report(_exceptionable, {
                                        path: _path + ".equal",
                                        expected: "Array<> & MaxItems<10>",
                                        value: input.equal,
                                    })) &&
                                input.equal
                                    .map(
                                        (elem: any, _index5: number) =>
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".equal[" +
                                                    _index5 +
                                                    "]",
                                                expected: "number",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".equal",
                                    expected:
                                        "(Array<number> & MinItems<10> & MaxItems<10>)",
                                    value: input.equal,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "CommentTagArray",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "CommentTagArray",
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
        const stringify = (input: CommentTagArray): string => {
            const $io1 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 <= input.items.length &&
                input.items.length <= 3 &&
                input.items.every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every((elem: any) => "number" === typeof elem) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                input.both.length <= 7 &&
                input.both.every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.equal) &&
                10 <= input.equal.length &&
                input.equal.length <= 10 &&
                input.equal.every((elem: any) => "number" === typeof elem);
            const $string = (typia.json.createValidateStringify as any).string;
            const $number = (typia.json.createValidateStringify as any).number;
            const $so0 = (input: any): any =>
                `{"value":${`[${input.value
                    .map((elem: any) => $so1(elem))
                    .join(",")}]`}}`;
            const $so1 = (input: any): any =>
                `{"items":${`[${input.items
                    .map((elem: any) => $string(elem))
                    .join(",")}]`},"minItems":${`[${input.minItems
                    .map((elem: any) => $number(elem))
                    .join(",")}]`},"both":${`[${input.both
                    .map((elem: any) => $string(elem))
                    .join(",")}]`},"equal":${`[${input.equal
                    .map((elem: any) => $number(elem))
                    .join(",")}]`}}`;
            return $so0(input);
        };
        const output = validate(input) as any;
        if (output.success) output.data = stringify(input);
        return output;
    });
