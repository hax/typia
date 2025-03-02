import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createAssertEncode_TypeTagTypeUnion =
    _test_protobuf_assertEncode("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )({
        assertEncode: typia.protobuf.createAssertEncode<TypeTagTypeUnion>(),
        message: typia.protobuf.message<TypeTagTypeUnion>(),
        decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
    });
