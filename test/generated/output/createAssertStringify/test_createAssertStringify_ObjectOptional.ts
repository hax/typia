import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_createAssertStringify_ObjectOptional = _test_assertStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input: any): string => {
        const assert = (input: any): ObjectOptional => {
            const $guard = (typia.createAssertStringify as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectOptional => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.id ||
                        "string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "(string | undefined)",
                            value: input.id,
                        })) &&
                    (undefined === input.name ||
                        "string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "(string | undefined)",
                            value: input.name,
                        })) &&
                    (undefined === input.email ||
                        "string" === typeof input.email ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "(string | undefined)",
                            value: input.email,
                        })) &&
                    (undefined === input.sequence ||
                        ("number" === typeof input.sequence &&
                            Number.isFinite(input.sequence)) ||
                        $guard(_exceptionable, {
                            path: _path + ".sequence",
                            expected: "(number | undefined)",
                            value: input.sequence,
                        }));
                return (
                    (("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectOptional",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const stringify = (input: ObjectOptional): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $number = (typia.createAssertStringify as any).number;
            const $tail = (typia.createAssertStringify as any).tail;
            const $so0 = (input: any): any =>
                `{${$tail(
                    `${
                        undefined === input.id
                            ? ""
                            : `"id":${
                                  undefined !== input.id
                                      ? $string(input.id)
                                      : undefined
                              },`
                    }${
                        undefined === input.name
                            ? ""
                            : `"name":${
                                  undefined !== input.name
                                      ? $string(input.name)
                                      : undefined
                              },`
                    }${
                        undefined === input.email
                            ? ""
                            : `"email":${
                                  undefined !== input.email
                                      ? $string(input.email)
                                      : undefined
                              },`
                    }${
                        undefined === input.sequence
                            ? ""
                            : `"sequence":${
                                  undefined !== input.sequence
                                      ? $number(input.sequence)
                                      : undefined
                              }`
                    }`,
                )}}`;
            return $so0(input);
        };
        return stringify(assert(input));
    },
    ObjectOptional.SPOILERS,
);
