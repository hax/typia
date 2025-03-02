import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_random_NativeUnion = _test_random("NativeUnion")<NativeUnion>(
    NativeUnion,
)({
    random: () => typia.random<NativeUnion>(),
    assert: typia.createAssert<NativeUnion>(),
});
