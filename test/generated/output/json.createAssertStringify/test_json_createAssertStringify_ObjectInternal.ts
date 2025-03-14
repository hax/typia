import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_createAssertStringify_ObjectInternal =
    _test_json_assertStringify("ObjectInternal")<ObjectInternal>(
        ObjectInternal,
    )((input: any): string => {
        const assert = (input: any): ObjectInternal => {
            const __is = (input: any): input is ObjectInternal => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).id &&
                    "string" === typeof (input as any).name
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectInternal => {
                    const $guard = (typia.json.createAssertStringify as any)
                        .guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectInternal",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectInternal",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify = (input: ObjectInternal): string => {
            const $string = (typia.json.createAssertStringify as any).string;
            return `{"id":${$string((input as any).id)},"name":${$string(
                (input as any).name,
            )}}`;
        };
        return stringify(assert(input));
    });
