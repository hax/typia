import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createRandom_ObjectNullable = _test_random(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
    random: typia.createRandom<ObjectNullable>(),
    assert: typia.createAssert<ObjectNullable>(),
});
