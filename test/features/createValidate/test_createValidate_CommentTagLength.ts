import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createValidate_CommentTagLength = _test_validate(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)(typia.createValidate<CommentTagLength>());
