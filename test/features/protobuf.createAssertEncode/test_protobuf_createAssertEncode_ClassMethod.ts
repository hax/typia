import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createAssertEncode_ClassMethod =
    _test_protobuf_assertEncode("ClassMethod")<ClassMethod>(ClassMethod)({
        assertEncode: typia.protobuf.createAssertEncode<ClassMethod>(),
        message: typia.protobuf.message<ClassMethod>(),
        decode: typia.protobuf.createDecode<ClassMethod>(),
    });
