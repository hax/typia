import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createRandom_ObjectPrimitive = _test_random(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
    random: typia.createRandom<ObjectPrimitive>(),
    assert: typia.createAssert<ObjectPrimitive>(),
});
