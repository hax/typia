import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_createAssert_ToJsonUnion = _test_assert(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input: any): ToJsonUnion => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonUnion => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.mobile ||
                    $guard(_exceptionable, {
                        path: _path + ".mobile",
                        expected: "string",
                        value: input.mobile,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    }));
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                "function" === typeof input.toJSON ||
                $guard(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON,
                });
            const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                "function" === typeof input.toJSON ||
                $guard(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON,
                });
            const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                "function" === typeof input.toJSON ||
                $guard(_exceptionable, {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON,
                });
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if (undefined !== input.id)
                        return $ao0(input, _path, true && _exceptionable);
                    return (
                        $ao1(input, _path, false && _exceptionable) ||
                        $ao2(input, _path, false && _exceptionable) ||
                        $ao3(input, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ToJsonUnion.IWrapper<boolean> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>)",
                            value: input,
                        })
                    );
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (null !== elem ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                value: elem,
                            })) &&
                        (undefined !== elem ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                value: elem,
                            })) &&
                        ("string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            ((("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                                    value: elem,
                                })) &&
                                $au0(elem, _path + "[" + _index1 + "]", true))),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
