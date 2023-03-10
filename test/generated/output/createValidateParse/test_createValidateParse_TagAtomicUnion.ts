import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createValidateParse_TagAtomicUnion = _test_validateParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input: string): typia.IValidation<typia.Primitive<TagAtomicUnion>> => {
        const validate = (input: any): typia.IValidation<TagAtomicUnion> => {
            const errors = [] as any[];
            const $report = (typia.createValidateParse as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagAtomicUnion => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("string" === typeof input.value &&
                            3 <= input.value.length &&
                            7 >= input.value.length) ||
                            ("number" === typeof input.value &&
                                Number.isFinite(input.value) &&
                                3 <= input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "(number | string)",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<TagAtomicUnion.Type>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagAtomicUnion.Type",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagAtomicUnion.Type",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<TagAtomicUnion.Type>",
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
        input = JSON.parse(input);
        const output = validate(input);
        return output;
    },
    TagAtomicUnion.SPOILERS,
);
