import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_protobuf_encode_ObjectHttpNullable = _test_protobuf_encode(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
    encode: (input) => typia.protobuf.encode<ObjectHttpNullable>(input),
    message: typia.protobuf.message<ObjectHttpNullable>(),
    decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
});
