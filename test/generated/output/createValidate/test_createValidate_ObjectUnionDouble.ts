import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createValidate_ObjectUnionDouble = _test_validate(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: any): typia.IValidation<ObjectUnionDouble> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectUnionDouble => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type",
                            value: input.value,
                        })) &&
                        $vo1(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type",
                            value: input.value,
                        }),
                    ((("object" === typeof input.child &&
                        null !== input.child) ||
                        $report(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input.child,
                        })) &&
                        $vu0(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                            value: input.child,
                        }),
                ].every((flag: boolean) => flag);
            const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("number" === typeof input.x && Number.isFinite(input.x)) ||
                        $report(_exceptionable, {
                            path: _path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                ].every((flag: boolean) => flag);
            const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o1",
                            value: input.value,
                        })) &&
                        $vo3(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o1",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "boolean" === typeof input.y ||
                        $report(_exceptionable, {
                            path: _path + ".y",
                            expected: "boolean",
                            value: input.y,
                        }),
                ].every((flag: boolean) => flag);
            const $vo4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o2",
                            value: input.value,
                        })) &&
                        $vo5(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o2",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("number" === typeof input.y && Number.isFinite(input.y)) ||
                        $report(_exceptionable, {
                            path: _path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                ].every((flag: boolean) => flag);
            const $vo6 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o3",
                            value: input.value,
                        })) &&
                        $vo7(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o3",
                            value: input.value,
                        }),
                    ((("object" === typeof input.child &&
                        null !== input.child) ||
                        $report(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input.child,
                        })) &&
                        $vu1(
                            input.child,
                            _path + ".child",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".child",
                            expected:
                                "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                            value: input.child,
                        }),
                ].every((flag: boolean) => flag);
            const $vo7 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "string" === typeof input.x ||
                        $report(_exceptionable, {
                            path: _path + ".x",
                            expected: "string",
                            value: input.x,
                        }),
                ].every((flag: boolean) => flag);
            const $vo8 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o4",
                            value: input.value,
                        })) &&
                        $vo9(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o4",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo9 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "string" === typeof input.y ||
                        $report(_exceptionable, {
                            path: _path + ".y",
                            expected: "string",
                            value: input.y,
                        }),
                ].every((flag: boolean) => flag);
            const $vo10 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((("object" === typeof input.value &&
                        null !== input.value) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o5",
                            value: input.value,
                        })) &&
                        $vo11(
                            input.value,
                            _path + ".value",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "__type.o5",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo11 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((Array.isArray(input.y) ||
                        $report(_exceptionable, {
                            path: _path + ".y",
                            expected: "Array<number>",
                            value: input.y,
                        })) &&
                        input.y
                            .map(
                                (elem: any, _index2: number) =>
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".y[" + _index2 + "]",
                                        expected: "number",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".y",
                            expected: "Array<number>",
                            value: input.y,
                        }),
                ].every((flag: boolean) => flag);
            const $vu0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                $vo2(input, _path, false && _exceptionable) ||
                $vo4(input, _path, false && _exceptionable);
            const $vu1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                $vo8(input, _path, false && _exceptionable) ||
                $vo10(input, _path, false && _exceptionable);
            const $vu2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                $vo0(input, _path, false && _exceptionable) ||
                $vo6(input, _path, false && _exceptionable);
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<(ObjectUnionDouble.IA | ObjectUnionDouble.IB)>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                        value: elem,
                                    })) &&
                                    $vu2(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected:
                        "Array<(ObjectUnionDouble.IA | ObjectUnionDouble.IB)>",
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
    },
    ObjectUnionDouble.SPOILERS,
);
