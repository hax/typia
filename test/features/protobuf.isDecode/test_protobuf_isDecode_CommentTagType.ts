import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_isDecode_CommentTagType = _test_protobuf_isDecode(
    "CommentTagType",
)<CommentTagType>(CommentTagType)({
    isDecode: (input) => typia.protobuf.isDecode<CommentTagType>(input),
    encode: typia.protobuf.createEncode<CommentTagType>(),
});
