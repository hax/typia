import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_random_TupleOptional = _test_random(
    "TupleOptional",
)<TupleOptional>(TupleOptional)({
    random: () => typia.random<TupleOptional>(),
    assert: typia.createAssert<TupleOptional>(),
});
