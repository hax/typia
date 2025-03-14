import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_protobuf_createAssertDecode_TypeTagRangeBigInt =
    _test_protobuf_assertDecode("TypeTagRangeBigInt")<TypeTagRangeBigInt>(
        TypeTagRangeBigInt,
    )({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagRangeBigInt>(),
        encode: typia.protobuf.createEncode<TypeTagRangeBigInt>(),
    });
