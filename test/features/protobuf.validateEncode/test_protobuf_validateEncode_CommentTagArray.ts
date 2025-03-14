import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_validateEncode_CommentTagArray =
    _test_protobuf_validateEncode("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagArray>(input),
        message: typia.protobuf.message<CommentTagArray>(),
        decode: typia.protobuf.createDecode<CommentTagArray>(),
    });
