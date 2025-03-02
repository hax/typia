import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createEncode_ArrayRecursive = _test_protobuf_encode(
    "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
    encode: typia.protobuf.createEncode<ArrayRecursive>(),
    message: typia.protobuf.message<ArrayRecursive>(),
    decode: typia.protobuf.createDecode<ArrayRecursive>(),
});
