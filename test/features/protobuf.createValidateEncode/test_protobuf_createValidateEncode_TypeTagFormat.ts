import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createValidateEncode_TypeTagFormat =
    _test_protobuf_validateEncode("TypeTagFormat")<TypeTagFormat>(
        TypeTagFormat,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TypeTagFormat>(),
        message: typia.protobuf.message<TypeTagFormat>(),
        decode: typia.protobuf.createDecode<TypeTagFormat>(),
    });
