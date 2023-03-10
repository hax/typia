import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_createAssertStringify_ObjectAlias = _test_assertStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input: any): string => {
        const assert = (input: any): ObjectAlias => {
            const $guard = (typia.createAssertStringify as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectAlias => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (null === input.id ||
                        "string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "(null | string)",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.email ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "string",
                            value: input.email,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (null === input.sex ||
                        1 === input.sex ||
                        2 === input.sex ||
                        "male" === input.sex ||
                        "female" === input.sex ||
                        $guard(_exceptionable, {
                            path: _path + ".sex",
                            expected: '("female" | "male" | 1 | 2 | null)',
                            value: input.sex,
                        })) &&
                    (null === input.age ||
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "(null | number)",
                            value: input.age,
                        })) &&
                    (null === input.dead ||
                        "boolean" === typeof input.dead ||
                        $guard(_exceptionable, {
                            path: _path + ".dead",
                            expected: "(boolean | null)",
                            value: input.dead,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<ObjectAlias.IMember>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "ObjectAlias.IMember",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const stringify = (input: ObjectAlias): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $number = (typia.createAssertStringify as any).number;
            const $throws = (typia.createAssertStringify as any).throws;
            const $so0 = (input: any): any =>
                `{"id":${
                    null !== input.id ? $string(input.id) : "null"
                },"email":${$string(input.email)},"name":${$string(
                    input.name,
                )},"sex":${
                    null !== input.sex
                        ? (() => {
                              if ("string" === typeof input.sex)
                                  return $string(input.sex);
                              if ("number" === typeof input.sex)
                                  return $number(input.sex);
                              if ("string" === typeof input.sex)
                                  return '"' + input.sex + '"';
                              $throws({
                                  expected:
                                      '("female" | "male" | 1 | 2 | null)',
                                  value: input.sex,
                              });
                          })()
                        : "null"
                },"age":${
                    null !== input.age ? $number(input.age) : "null"
                },"dead":${null !== input.dead ? input.dead : "null"}}`;
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        };
        return stringify(assert(input));
    },
    ObjectAlias.SPOILERS,
);
