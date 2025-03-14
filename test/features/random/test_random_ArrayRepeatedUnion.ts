import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_random_ArrayRepeatedUnion = _test_random(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(ArrayRepeatedUnion)({
    random: () => typia.random<ArrayRepeatedUnion>(),
    assert: typia.createAssert<ArrayRepeatedUnion>(),
});
