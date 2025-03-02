import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_isEncode_ObjectInternal = _test_protobuf_isEncode(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectInternal>(input),
    message: typia.protobuf.message<ObjectInternal>(),
    decode: typia.protobuf.createDecode<ObjectInternal>(),
});
