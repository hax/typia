import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createAssertEncode_ObjectSimpleProtobufNullable =
    _test_protobuf_assertEncode(
        "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
        assertEncode:
            typia.protobuf.createAssertEncode<ObjectSimpleProtobufNullable>(),
        message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
    });
