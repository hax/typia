import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createValidateEncode_CommentTagPattern =
    _test_protobuf_validateEncode("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<CommentTagPattern>(),
        message: typia.protobuf.message<CommentTagPattern>(),
        decode: typia.protobuf.createDecode<CommentTagPattern>(),
    });
