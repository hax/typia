import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_isEncode_TypeTagNaN = _test_protobuf_isEncode(
    "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
    isEncode: (input) => typia.protobuf.isEncode<TypeTagNaN>(input),
    message: typia.protobuf.message<TypeTagNaN>(),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
});
