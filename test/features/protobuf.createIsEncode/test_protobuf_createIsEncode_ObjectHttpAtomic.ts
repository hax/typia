import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createIsEncode_ObjectHttpAtomic =
    _test_protobuf_isEncode("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )({
        isEncode: typia.protobuf.createIsEncode<ObjectHttpAtomic>(),
        message: typia.protobuf.message<ObjectHttpAtomic>(),
        decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
    });
