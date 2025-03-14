import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_json_isParse_CommentTagArray = _test_json_isParse(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    ((input: any): typia.Primitive<CommentTagArray> => {
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
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
