import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createAssertEncode_TypeTagCustom =
    _test_protobuf_assertEncode("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)({
        assertEncode: typia.protobuf.createAssertEncode<TypeTagCustom>(),
        message: typia.protobuf.message<TypeTagCustom>(),
        decode: typia.protobuf.createDecode<TypeTagCustom>(),
    });
