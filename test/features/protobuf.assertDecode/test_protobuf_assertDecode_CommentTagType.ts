import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_assertDecode_CommentTagType =
    _test_protobuf_assertDecode("CommentTagType")<CommentTagType>(
        CommentTagType,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<CommentTagType>(input),
        encode: typia.protobuf.createEncode<CommentTagType>(),
    });
