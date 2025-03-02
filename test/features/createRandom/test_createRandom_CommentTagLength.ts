import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createRandom_CommentTagLength = _test_random(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
    random: typia.createRandom<CommentTagLength>(),
    assert: typia.createAssert<CommentTagLength>(),
});
