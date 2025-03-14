import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_assertEncode_TypeTagAtomicUnion =
    _test_protobuf_assertEncode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<TypeTagAtomicUnion>(input),
        message: typia.protobuf.message<TypeTagAtomicUnion>(),
        decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
    });
