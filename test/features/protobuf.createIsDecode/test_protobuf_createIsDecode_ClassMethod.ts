import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createIsDecode_ClassMethod = _test_protobuf_isDecode(
    "ClassMethod",
)<ClassMethod>(ClassMethod)({
    isDecode: typia.protobuf.createIsDecode<ClassMethod>(),
    encode: typia.protobuf.createEncode<ClassMethod>(),
});
