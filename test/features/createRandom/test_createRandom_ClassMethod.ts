import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createRandom_ClassMethod = _test_random(
    "ClassMethod",
)<ClassMethod>(ClassMethod)({
    random: typia.createRandom<ClassMethod>(),
    assert: typia.createAssert<ClassMethod>(),
});
