import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_isEncode_CommentTagType = _test_protobuf_isEncode(
    "CommentTagType",
)<CommentTagType>(CommentTagType)({
    isEncode: (input) => typia.protobuf.isEncode<CommentTagType>(input),
    message: typia.protobuf.message<CommentTagType>(),
    decode: typia.protobuf.createDecode<CommentTagType>(),
});
