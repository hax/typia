import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createAssertEncode_CommentTagNaN =
    _test_protobuf_assertEncode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
        assertEncode: typia.protobuf.createAssertEncode<CommentTagNaN>(),
        message: typia.protobuf.message<CommentTagNaN>(),
        decode: typia.protobuf.createDecode<CommentTagNaN>(),
    });
