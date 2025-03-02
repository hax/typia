import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createAssertDecode_TypeTagTypeBigInt =
    _test_protobuf_assertDecode("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
        TypeTagTypeBigInt,
    )({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagTypeBigInt>(),
        encode: typia.protobuf.createEncode<TypeTagTypeBigInt>(),
    });
