import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createAssertDecode_TypeTagType =
    _test_protobuf_assertDecode("TypeTagType")<TypeTagType>(TypeTagType)({
        assertDecode: typia.protobuf.createAssertDecode<TypeTagType>(),
        encode: typia.protobuf.createEncode<TypeTagType>(),
    });
