import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createRandom_ArrayAny = _test_random("ArrayAny")<ArrayAny>(
    ArrayAny,
)({
    random: typia.createRandom<ArrayAny>(),
    assert: typia.createAssert<ArrayAny>(),
});
