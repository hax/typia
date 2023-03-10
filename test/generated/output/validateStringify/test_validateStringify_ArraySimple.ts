import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_validateStringify_ArraySimple = _test_validateStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) =>
        ((input: Array<ArraySimple.IPerson>): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<ArraySimple.IPerson>> => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<ArraySimple.IPerson> => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "string" === typeof input.email ||
                                $report(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "string",
                                    value: input.email,
                                }),
                            ((Array.isArray(input.hobbies) ||
                                $report(_exceptionable, {
                                    path: _path + ".hobbies",
                                    expected: "Array<ArraySimple.IHobby>",
                                    value: input.hobbies,
                                })) &&
                                input.hobbies
                                    .map(
                                        (elem: any, _index2: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".hobbies[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "ArraySimple.IHobby",
                                                    value: elem,
                                                })) &&
                                                $vo1(
                                                    elem,
                                                    _path +
                                                        ".hobbies[" +
                                                        _index2 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".hobbies[" +
                                                    _index2 +
                                                    "]",
                                                expected: "ArraySimple.IHobby",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".hobbies",
                                    expected: "Array<ArraySimple.IHobby>",
                                    value: input.hobbies,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "string" === typeof input.body ||
                                $report(_exceptionable, {
                                    path: _path + ".body",
                                    expected: "string",
                                    value: input.body,
                                }),
                            ("number" === typeof input.rank &&
                                Number.isFinite(input.rank)) ||
                                $report(_exceptionable, {
                                    path: _path + ".rank",
                                    expected: "number",
                                    value: input.rank,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<ArraySimple.IPerson>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "ArraySimple.IPerson",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "ArraySimple.IPerson",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<ArraySimple.IPerson>",
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
            const stringify = (input: Array<ArraySimple.IPerson>): string => {
                const $string = (typia.validateStringify as any).string;
                const $number = (typia.validateStringify as any).number;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank;
                const $so0 = (input: any): any =>
                    `{"name":${$string(input.name)},"email":${$string(
                        input.email,
                    )},"hobbies":${`[${input.hobbies
                        .map(
                            (elem: any) =>
                                `{"name":${$string(elem.name)},"body":${$string(
                                    elem.body,
                                )},"rank":${$number(elem.rank)}}`,
                        )
                        .join(",")}]`}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    ArraySimple.SPOILERS,
);
