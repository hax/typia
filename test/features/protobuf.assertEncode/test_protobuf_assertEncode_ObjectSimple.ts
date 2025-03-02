import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_assertEncode_ObjectSimple =
    _test_protobuf_assertEncode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectSimple>(input),
        message: typia.protobuf.message<ObjectSimple>(),
        decode: typia.protobuf.createDecode<ObjectSimple>(),
    });
