import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_decode_CommentTagLength = _test_protobuf_decode(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
    decode: (input) => typia.protobuf.decode<CommentTagLength>(input),
    encode: typia.protobuf.createEncode<CommentTagLength>(),
});
