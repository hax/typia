import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createValidateEncode_CommentTagNaN =
    _test_protobuf_validateEncode("CommentTagNaN")<CommentTagNaN>(
        CommentTagNaN,
    )({
        validateEncode: typia.protobuf.createValidateEncode<CommentTagNaN>(),
        message: typia.protobuf.message<CommentTagNaN>(),
        decode: typia.protobuf.createDecode<CommentTagNaN>(),
    });
