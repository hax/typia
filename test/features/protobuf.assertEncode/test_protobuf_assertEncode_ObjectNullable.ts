import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_assertEncode_ObjectNullable =
    _test_protobuf_assertEncode("ObjectNullable")<ObjectNullable>(
        ObjectNullable,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectNullable>(input),
        message: typia.protobuf.message<ObjectNullable>(),
        decode: typia.protobuf.createDecode<ObjectNullable>(),
    });
