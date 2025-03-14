import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_assertDecode_CommentTagPattern =
    _test_protobuf_assertDecode("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<CommentTagPattern>(input),
        encode: typia.protobuf.createEncode<CommentTagPattern>(),
    });
