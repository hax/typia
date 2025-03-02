import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_isEncode_TypeTagRange = _test_protobuf_isEncode(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagRange>(input),
    message: typia.protobuf.message<TypeTagRange>(),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
});
