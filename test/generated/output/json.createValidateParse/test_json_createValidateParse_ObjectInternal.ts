import typia from "../../../../src";
import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_createValidateParse_ObjectInternal =
    _test_json_validateParse("ObjectInternal")<ObjectInternal>(ObjectInternal)(
        (input: string): typia.IValidation<typia.Primitive<ObjectInternal>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectInternal> => {
                const errors = [] as any[];
                const __is = (input: any): input is ObjectInternal => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).id &&
                        "string" === typeof (input as any).name
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.json.createValidateParse as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectInternal => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectInternal",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectInternal",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const output = JSON.parse(input);
            return validate(output) as any;
        },
    );
