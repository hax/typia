import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createIsEncode_ObjectPrimitive =
    _test_protobuf_isEncode("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )({
        isEncode: typia.protobuf.createIsEncode<ObjectPrimitive>(),
        message: typia.protobuf.message<ObjectPrimitive>(),
        decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    });
