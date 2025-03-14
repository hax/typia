import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_misc_clone_CommentTagAtomicUnion = _test_misc_clone(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    typia.misc.clone<CommentTagAtomicUnion>(input),
);
