import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_createRandom_TypeTagCustom = _test_random(
    "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
    random: typia.createRandom<TypeTagCustom>(TypeTagCustom.RANDOM),
    assert: typia.createAssert<TypeTagCustom>(),
});
