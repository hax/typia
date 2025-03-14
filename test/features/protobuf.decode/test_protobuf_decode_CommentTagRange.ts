import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_decode_CommentTagRange = _test_protobuf_decode(
    "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
    decode: (input) => typia.protobuf.decode<CommentTagRange>(input),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
});
