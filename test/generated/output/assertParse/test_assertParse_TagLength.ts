import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { TagLength } from "../../../structures/TagLength";

export const test_assertParse_TagLength = _test_assertParse(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: string): typia.Primitive<TagLength> => {
            const assert = (input: any): TagLength => {
                const $guard = (typia.assertParse as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagLength => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("string" === typeof input.fixed &&
                            5 === input.fixed.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".fixed",
                                expected: "string",
                                value: input.fixed,
                            })) &&
                        (("string" === typeof input.minimum &&
                            3 <= input.minimum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "string",
                                value: input.minimum,
                            })) &&
                        (("string" === typeof input.maximum &&
                            7 >= input.maximum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "string",
                                value: input.maximum,
                            })) &&
                        (("string" === typeof input.minimum_and_maximum &&
                            3 <= input.minimum_and_maximum.length &&
                            7 >= input.minimum_and_maximum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string",
                                value: input.minimum_and_maximum,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Array<TagLength.Type>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagLength.Type",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input);
        })(input),
    TagLength.SPOILERS,
);
