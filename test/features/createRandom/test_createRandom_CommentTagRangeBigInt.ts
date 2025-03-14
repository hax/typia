import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_createRandom_CommentTagRangeBigInt = _test_random(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
    random: typia.createRandom<CommentTagRangeBigInt>(),
    assert: typia.createAssert<CommentTagRangeBigInt>(),
});
