import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_isParse_ArraySimple = _test_isParse(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.isParse<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
