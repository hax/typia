import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createIsClone_ObjectUnionDouble = _test_misc_isClone(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.misc.createIsClone<ObjectUnionDouble>(),
);
