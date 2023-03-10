import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_validate_ObjectUnionNonPredictable = _test_validate(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            Array<
                ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
            >
        > => {
            const errors = [] as any[];
            const $report = (typia.validate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<
                ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
            > => {
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
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                                value: input.value,
                            })) &&
                            $vo1(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ((("object" === typeof input.value &&
                            null !== input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                value: input.value,
                            })) &&
                            $vu0(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                value: input.value,
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
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<boolean>",
                                value: input.value,
                            })) &&
                            $vo3(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<boolean>",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "boolean" === typeof input.value ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "boolean",
                                value: input.value,
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
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<number>",
                                value: input.value,
                            })) &&
                            $vo5(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<number>",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
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
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<string>",
                                value: input.value,
                            })) &&
                            $vo7(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "ObjectUnionNonPredictable.IPointer<string>",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo7 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.value ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                const $vu0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    $vo2(input, _path, false && _exceptionable) ||
                    $vo4(input, _path, false && _exceptionable) ||
                    $vo6(input, _path, false && _exceptionable);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
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
        })(input),
    ObjectUnionNonPredictable.SPOILERS,
);
