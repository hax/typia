import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createRandom_NativeSimple = _test_random(
    "NativeSimple",
)<NativeSimple>(NativeSimple)({
    random: typia.createRandom<NativeSimple>(),
    assert: typia.createAssert<NativeSimple>(),
});
