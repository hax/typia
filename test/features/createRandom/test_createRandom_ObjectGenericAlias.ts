import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createRandom_ObjectGenericAlias = _test_random(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)({
    random: typia.createRandom<ObjectGenericAlias>(),
    assert: typia.createAssert<ObjectGenericAlias>(),
});
