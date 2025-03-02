import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_misc_prune_ObjectGenericAlias = _test_misc_prune(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    ((input: ObjectGenericAlias): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    })(input),
);
