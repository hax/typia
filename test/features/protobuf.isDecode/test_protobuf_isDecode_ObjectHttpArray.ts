import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_isDecode_ObjectHttpArray = _test_protobuf_isDecode(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
    isDecode: (input) => typia.protobuf.isDecode<ObjectHttpArray>(input),
    encode: typia.protobuf.createEncode<ObjectHttpArray>(),
});
