import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createIsEncode_TypeTagArray =
    _test_protobuf_isEncode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
        isEncode: typia.protobuf.createIsEncode<TypeTagArray>(),
        message: typia.protobuf.message<TypeTagArray>(),
        decode: typia.protobuf.createDecode<TypeTagArray>(),
    });
