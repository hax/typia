import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createRandom_ObjectUnionComposite = _test_random(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)({
    random: typia.createRandom<ObjectUnionComposite>(),
    assert: typia.createAssert<ObjectUnionComposite>(),
});
