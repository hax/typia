import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_misc_createClone_ObjectUnionNonPredictable = _test_misc_clone(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    (
        input: ObjectUnionNonPredictable,
    ): typia.Resolved<ObjectUnionNonPredictable> => {
        const $io1 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io2(input.value);
        const $io2 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $iu0(input.value);
        const $io3 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io4(input.value);
        const $io4 = (input: any): boolean => "boolean" === typeof input.value;
        const $io5 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io6(input.value);
        const $io6 = (input: any): boolean => "number" === typeof input.value;
        const $io7 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io8(input.value);
        const $io8 = (input: any): boolean => "string" === typeof input.value;
        const $iu0 = (input: any): any =>
            $io7(input) || $io5(input) || $io3(input);
        const $throws = (typia.misc.createClone as any).throws;
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co1(elem)
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            value: Array.isArray(input.value)
                ? $cp0(input.value)
                : (input.value as any),
        });
        const $co1 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co2(input.value)
                    : (input.value as any),
        });
        const $co2 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $cu0(input.value)
                    : (input.value as any),
        });
        const $co3 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co4(input.value)
                    : (input.value as any),
        });
        const $co4 = (input: any): any => ({
            value: input.value as any,
        });
        const $co5 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co6(input.value)
                    : (input.value as any),
        });
        const $co6 = (input: any): any => ({
            value: input.value as any,
        });
        const $co7 = (input: any): any => ({
            value:
                "object" === typeof input.value && null !== input.value
                    ? $co8(input.value)
                    : (input.value as any),
        });
        const $co8 = (input: any): any => ({
            value: input.value as any,
        });
        const $cu0 = (input: any): any =>
            (() => {
                if ($io7(input)) return $co7(input);
                else if ($io5(input)) return $co5(input);
                else if ($io3(input)) return $co3(input);
                else
                    $throws({
                        expected:
                            "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                        value: input,
                    });
            })();
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    },
);
