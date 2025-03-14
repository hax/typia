import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createEncode_CommentTagNaN = _test_protobuf_encode(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)({
    encode: typia.protobuf.createEncode<CommentTagNaN>(),
    message: typia.protobuf.message<CommentTagNaN>(),
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
});
