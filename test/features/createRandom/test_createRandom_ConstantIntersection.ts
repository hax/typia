import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createRandom_ConstantIntersection = _test_random(
    "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)({
    random: typia.createRandom<ConstantIntersection>(),
    assert: typia.createAssert<ConstantIntersection>(),
});
