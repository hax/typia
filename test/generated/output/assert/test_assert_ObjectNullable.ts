import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_assert_ObjectNullable = _test_assert(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) =>
        ((
            input: any,
        ): [
            ObjectNullable.IProduct,
            ObjectNullable.IProduct,
            ObjectNullable.IProduct,
        ] => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is [
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
            ] => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (("object" === typeof input.manufacturer &&
                        null !== input.manufacturer) ||
                        $guard(_exceptionable, {
                            path: _path + ".manufacturer",
                            expected: "ObjectNullable.IManufacturer",
                            value: input.manufacturer,
                        })) &&
                    $ao1(
                        input.manufacturer,
                        _path + ".manufacturer",
                        true && _exceptionable,
                    ) &&
                    (null === input.brand ||
                        ((("object" === typeof input.brand &&
                            null !== input.brand) ||
                            $guard(_exceptionable, {
                                path: _path + ".brand",
                                expected: "(ObjectNullable.IBrand | null)",
                                value: input.brand,
                            })) &&
                            $ao2(
                                input.brand,
                                _path + ".brand",
                                true && _exceptionable,
                            ))) &&
                    (null === input.similar ||
                        ((("object" === typeof input.similar &&
                            null !== input.similar) ||
                            $guard(_exceptionable, {
                                path: _path + ".similar",
                                expected:
                                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                                value: input.similar,
                            })) &&
                            $au0(
                                input.similar,
                                _path + ".similar",
                                true && _exceptionable,
                            )));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("manufacturer" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"manufacturer"',
                            value: input.type,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }));
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("brand" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"brand"',
                            value: input.type,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }));
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("manufacturer" === input.type)
                            return $ao1(input, _path, true && _exceptionable);
                        if ("brand" === input.type)
                            return $ao2(input, _path, true && _exceptionable);
                        return $guard(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                            value: input,
                        });
                    })();
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[ObjectNullable.IProduct, ObjectNullable.IProduct, ObjectNullable.IProduct]",
                            value: input,
                        })) &&
                    (input.length === 3 ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[ObjectNullable.IProduct, ObjectNullable.IProduct, ObjectNullable.IProduct]",
                            value: input,
                        })) &&
                    (("object" === typeof input[0] && null !== input[0]) ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "ObjectNullable.IProduct",
                            value: input[0],
                        })) &&
                    $ao0(input[0], _path + "[0]", true) &&
                    (("object" === typeof input[1] && null !== input[1]) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "ObjectNullable.IProduct",
                            value: input[1],
                        })) &&
                    $ao0(input[1], _path + "[1]", true) &&
                    (("object" === typeof input[2] && null !== input[2]) ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "ObjectNullable.IProduct",
                            value: input[2],
                        })) &&
                    $ao0(input[2], _path + "[2]", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
    ObjectNullable.SPOILERS,
);
