import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_misc_isPrune_ObjectInternal = _test_misc_isPrune(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input) =>
    ((input: any): input is ObjectInternal => {
        const is = (input: any): input is ObjectInternal => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                "string" === typeof (input as any).name
            );
        };
        const prune = (input: ObjectInternal): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("id" === key || "name" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    })(input),
);
