import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_json_createIsStringify_DynamicComposite =
    _test_json_isStringify("DynamicComposite")<DynamicComposite>(
        DynamicComposite,
    )((input: DynamicComposite): string | null => {
        const is = (input: any): input is DynamicComposite => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                Object.keys(input).every((key: any) => {
                    if (["id", "name"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    if (
                        RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                            key,
                        )
                    )
                        return (
                            "number" === typeof value && Number.isFinite(value)
                        );
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return "string" === typeof value;
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return "string" === typeof value;
                    if (
                        RegExp(
                            /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    )
                        return (
                            "string" === typeof value ||
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            "boolean" === typeof value
                        );
                    if (
                        RegExp(
                            /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                        ).test(key)
                    )
                        return "boolean" === typeof value;
                    return true;
                });
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: DynamicComposite): string => {
            const $string = (typia.json.createIsStringify as any).string;
            const $number = (typia.json.createIsStringify as any).number;
            const $throws = (typia.json.createIsStringify as any).throws;
            const $tail = (typia.json.createIsStringify as any).tail;
            const $so0 = (input: any): any =>
                `{${$tail(
                    `"id":${$string(input.id)},"name":${$string(
                        input.name,
                    )},${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            if (
                                ["id", "name"].some(
                                    (regular: any) => regular === key,
                                )
                            )
                                return "";
                            if (
                                RegExp(
                                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                                ).test(key)
                            )
                                return `${JSON.stringify(key)}:${$number(
                                    value,
                                )}`;
                            if (RegExp(/^(prefix_(.*))/).test(key))
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (RegExp(/((.*)_postfix)$/).test(key))
                                return `${JSON.stringify(key)}:${$string(
                                    value,
                                )}`;
                            if (
                                RegExp(
                                    /^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            )
                                return `${JSON.stringify(key)}:${(() => {
                                    if ("string" === typeof value)
                                        return $string(value);
                                    if ("number" === typeof value)
                                        return $number(value);
                                    if ("boolean" === typeof value)
                                        return value;
                                    $throws({
                                        expected: "(boolean | number | string)",
                                        value: value,
                                    });
                                })()}`;
                            if (
                                RegExp(
                                    /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
                                ).test(key)
                            )
                                return `${JSON.stringify(key)}:${value}`;
                            return "";
                        })
                        .filter((str: any) => "" !== str)
                        .join(",")}`,
                )}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    });
