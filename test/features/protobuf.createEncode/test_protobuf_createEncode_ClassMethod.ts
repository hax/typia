import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createEncode_ClassMethod = _test_protobuf_encode(
    "ClassMethod",
)<ClassMethod>(ClassMethod)({
    encode: typia.protobuf.createEncode<ClassMethod>(),
    message: typia.protobuf.message<ClassMethod>(),
    decode: typia.protobuf.createDecode<ClassMethod>(),
});
