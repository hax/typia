import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createAssertDecode_ObjectJsonTag =
    _test_protobuf_assertDecode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
        assertDecode: typia.protobuf.createAssertDecode<ObjectJsonTag>(),
        encode: typia.protobuf.createEncode<ObjectJsonTag>(),
    });
