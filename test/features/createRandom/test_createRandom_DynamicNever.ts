import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createRandom_DynamicNever = _test_random(
    "DynamicNever",
)<DynamicNever>(DynamicNever)({
    random: typia.createRandom<DynamicNever>(),
    assert: typia.createAssert<DynamicNever>(),
});
