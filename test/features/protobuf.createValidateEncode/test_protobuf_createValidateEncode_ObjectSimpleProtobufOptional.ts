import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createValidateEncode_ObjectSimpleProtobufOptional =
    _test_protobuf_validateEncode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        validateEncode:
            typia.protobuf.createValidateEncode<ObjectSimpleProtobufOptional>(),
        message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
    });
