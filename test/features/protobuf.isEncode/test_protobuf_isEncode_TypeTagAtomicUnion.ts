import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_isEncode_TypeTagAtomicUnion =
    _test_protobuf_isEncode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        isEncode: (input) => typia.protobuf.isEncode<TypeTagAtomicUnion>(input),
        message: typia.protobuf.message<TypeTagAtomicUnion>(),
        decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
    });
