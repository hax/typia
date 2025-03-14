import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createAssertEncode_CommentTagPattern =
    _test_protobuf_assertEncode("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )({
        assertEncode: typia.protobuf.createAssertEncode<CommentTagPattern>(),
        message: typia.protobuf.message<CommentTagPattern>(),
        decode: typia.protobuf.createDecode<CommentTagPattern>(),
    });
