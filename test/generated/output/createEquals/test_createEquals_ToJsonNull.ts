import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_createEquals_ToJsonNull = _test_equals(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)(
    (input: any, _exceptionable: boolean = true): input is ToJsonNull => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
