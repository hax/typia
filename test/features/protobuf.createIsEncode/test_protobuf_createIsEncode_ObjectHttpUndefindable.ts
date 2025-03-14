import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createIsEncode_ObjectHttpUndefindable =
    _test_protobuf_isEncode("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable,
    )({
        isEncode: typia.protobuf.createIsEncode<ObjectHttpUndefindable>(),
        message: typia.protobuf.message<ObjectHttpUndefindable>(),
        decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
    });
