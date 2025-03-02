import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_createAssertEquals_ObjectHttpAtomic = _test_assertEquals(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input: any): ObjectHttpAtomic => {
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is ObjectHttpAtomic => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "boolean" === typeof input.boolean &&
            "bigint" === typeof input.bigint &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["boolean", "bigint", "number", "string"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectHttpAtomic => {
            const $guard = (typia.createAssertEquals as any).guard;
            const $join = (typia.createAssertEquals as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("boolean" === typeof input.boolean ||
                    $guard(_exceptionable, {
                        path: _path + ".boolean",
                        expected: "boolean",
                        value: input.boolean,
                    })) &&
                ("bigint" === typeof input.bigint ||
                    $guard(_exceptionable, {
                        path: _path + ".bigint",
                        expected: "bigint",
                        value: input.bigint,
                    })) &&
                (("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $guard(_exceptionable, {
                        path: _path + ".number",
                        expected: "number",
                        value: input.number,
                    })) &&
                ("string" === typeof input.string ||
                    $guard(_exceptionable, {
                        path: _path + ".string",
                        expected: "string",
                        value: input.string,
                    })) &&
                (4 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["boolean", "bigint", "number", "string"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            return (
                ((("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectHttpAtomic",
                        value: input,
                    })) &&
                    $ao0(input, _path + "", true)) ||
                $guard(true, {
                    path: _path + "",
                    expected: "ObjectHttpAtomic",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
