import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createAssert_CommentTagRangeBigInt = _test_assert(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
    typia.createAssert<CommentTagRangeBigInt>(),
);
