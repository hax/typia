import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createAssertEncode_ObjectJsonTag =
    _test_protobuf_assertEncode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
        assertEncode: typia.protobuf.createAssertEncode<ObjectJsonTag>(),
        message: typia.protobuf.message<ObjectJsonTag>(),
        decode: typia.protobuf.createDecode<ObjectJsonTag>(),
    });
