import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_isDecode_ObjectNullable = _test_protobuf_isDecode(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
    isDecode: (input) => typia.protobuf.isDecode<ObjectNullable>(input),
    encode: typia.protobuf.createEncode<ObjectNullable>(),
});
