import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_misc_isClone_CommentTagArray = _test_misc_isClone(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    ((input: any): typia.Resolved<CommentTagArray> | null => {
        const is = (input: any): input is CommentTagArray => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 <= input.items.length &&
                input.items.length <= 3 &&
                input.items.every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                input.both.length <= 7 &&
                input.both.every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.equal) &&
                10 <= input.equal.length &&
                input.equal.length <= 10 &&
                input.equal.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone = (
            input: CommentTagArray,
        ): typia.Resolved<CommentTagArray> => {
            const $io1 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 <= input.items.length &&
                input.items.length <= 3 &&
                input.items.every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every((elem: any) => "number" === typeof elem) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                input.both.length <= 7 &&
                input.both.every((elem: any) => "string" === typeof elem) &&
                Array.isArray(input.equal) &&
                10 <= input.equal.length &&
                input.equal.length <= 10 &&
                input.equal.every((elem: any) => "number" === typeof elem);
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co1(elem)
                        : (elem as any),
                );
            const $cp1 = (input: any) => input.map((elem: any) => elem as any);
            const $cp2 = (input: any) => input.map((elem: any) => elem as any);
            const $co0 = (input: any): any => ({
                value: Array.isArray(input.value)
                    ? $cp0(input.value)
                    : (input.value as any),
            });
            const $co1 = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? $cp1(input.items)
                    : (input.items as any),
                minItems: Array.isArray(input.minItems)
                    ? $cp2(input.minItems)
                    : (input.minItems as any),
                both: Array.isArray(input.both)
                    ? $cp1(input.both)
                    : (input.both as any),
                equal: Array.isArray(input.equal)
                    ? $cp2(input.equal)
                    : (input.equal as any),
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);
