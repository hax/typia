import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_encode_TypeTagTypeUnion = _test_protobuf_encode(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
    encode: (input) => typia.protobuf.encode<TypeTagTypeUnion>(input),
    message: typia.protobuf.message<TypeTagTypeUnion>(),
    decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
});
