import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_assertEncode_ObjectSimpleProtobuf =
    _test_protobuf_assertEncode("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
        ObjectSimpleProtobuf,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectSimpleProtobuf>(input),
        message: typia.protobuf.message<ObjectSimpleProtobuf>(),
        decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    });
