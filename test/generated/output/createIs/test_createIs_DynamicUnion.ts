import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_createIs_DynamicUnion = _test_is(
    "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input: any): input is DynamicUnion => {
    const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key))
                return "string" === typeof value;
            if (RegExp(/^(prefix_(.*))/).test(key))
                return "string" === typeof value;
            if (RegExp(/((.*)_postfix)$/).test(key))
                return "string" === typeof value;
            if (
                RegExp(
                    /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                ).test(key)
            )
                return "number" === typeof value && Number.isFinite(value);
            return true;
        });
    return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
    );
});
