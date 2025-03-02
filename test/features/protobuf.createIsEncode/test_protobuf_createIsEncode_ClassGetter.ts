import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_createIsEncode_ClassGetter = _test_protobuf_isEncode(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    isEncode: typia.protobuf.createIsEncode<ClassGetter>(),
    message: typia.protobuf.message<ClassGetter>(),
    decode: typia.protobuf.createDecode<ClassGetter>(),
});
