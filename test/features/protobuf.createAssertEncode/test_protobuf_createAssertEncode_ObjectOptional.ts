import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createAssertEncode_ObjectOptional =
    _test_protobuf_assertEncode("ObjectOptional")<ObjectOptional>(
        ObjectOptional,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ObjectOptional>(),
        message: typia.protobuf.message<ObjectOptional>(),
        decode: typia.protobuf.createDecode<ObjectOptional>(),
    });
