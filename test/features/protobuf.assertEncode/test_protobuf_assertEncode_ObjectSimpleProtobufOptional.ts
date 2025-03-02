import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_assertEncode_ObjectSimpleProtobufOptional =
    _test_protobuf_assertEncode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectSimpleProtobufOptional>(input),
        message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
    });
