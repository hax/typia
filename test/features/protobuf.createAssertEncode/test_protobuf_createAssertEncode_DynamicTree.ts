import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createAssertEncode_DynamicTree =
    _test_protobuf_assertEncode("DynamicTree")<DynamicTree>(DynamicTree)({
        assertEncode: typia.protobuf.createAssertEncode<DynamicTree>(),
        message: typia.protobuf.message<DynamicTree>(),
        decode: typia.protobuf.createDecode<DynamicTree>(),
    });
