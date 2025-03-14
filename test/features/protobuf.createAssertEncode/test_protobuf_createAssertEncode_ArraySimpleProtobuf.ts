import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createAssertEncode_ArraySimpleProtobuf =
    _test_protobuf_assertEncode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
        ArraySimpleProtobuf,
    )({
        assertEncode: typia.protobuf.createAssertEncode<ArraySimpleProtobuf>(),
        message: typia.protobuf.message<ArraySimpleProtobuf>(),
        decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
    });
