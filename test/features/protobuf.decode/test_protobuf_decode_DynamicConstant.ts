import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_decode_DynamicConstant = _test_protobuf_decode(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)({
    decode: (input) => typia.protobuf.decode<DynamicConstant>(input),
    encode: typia.protobuf.createEncode<DynamicConstant>(),
});
