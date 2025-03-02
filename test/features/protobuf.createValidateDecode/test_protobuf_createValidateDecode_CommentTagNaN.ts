import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createValidateDecode_CommentTagNaN =
    _test_protobuf_validateDecode("CommentTagNaN")<CommentTagNaN>(
        CommentTagNaN,
    )({
        validateDecode: typia.protobuf.createValidateDecode<CommentTagNaN>(),
        encode: typia.protobuf.createEncode<CommentTagNaN>(),
    });
