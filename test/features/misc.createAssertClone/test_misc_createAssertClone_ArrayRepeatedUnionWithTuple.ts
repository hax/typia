import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_misc_createAssertClone_ArrayRepeatedUnionWithTuple =
    _test_misc_assertClone(
        "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
        typia.misc.createAssertClone<ArrayRepeatedUnionWithTuple>(),
    );
