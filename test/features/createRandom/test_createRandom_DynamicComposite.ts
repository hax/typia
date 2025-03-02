import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createRandom_DynamicComposite = _test_random(
    "DynamicComposite",
)<DynamicComposite>(DynamicComposite)({
    random: typia.createRandom<DynamicComposite>(),
    assert: typia.createAssert<DynamicComposite>(),
});
