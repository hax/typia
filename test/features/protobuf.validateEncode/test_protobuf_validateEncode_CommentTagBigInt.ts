import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_validateEncode_CommentTagBigInt =
    _test_protobuf_validateEncode("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagBigInt>(input),
        message: typia.protobuf.message<CommentTagBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagBigInt>(),
    });
