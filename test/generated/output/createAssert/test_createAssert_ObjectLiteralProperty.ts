import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_createAssert_ObjectLiteralProperty = _test_assert(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (input: any): ObjectLiteralProperty => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectLiteralProperty => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" ===
                    typeof input["something-interesting-do-you-want?"] ||
                    $guard(_exceptionable, {
                        path: _path + '["something-interesting-do-you-want?"]',
                        expected: "string",
                        value: input["something-interesting-do-you-want?"],
                    })) &&
                ("string" === typeof input["or-something-crazy-do-you-want?"] ||
                    $guard(_exceptionable, {
                        path: _path + '["or-something-crazy-do-you-want?"]',
                        expected: "string",
                        value: input["or-something-crazy-do-you-want?"],
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectLiteralProperty.ISomething",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    ObjectLiteralProperty.SPOILERS,
);
