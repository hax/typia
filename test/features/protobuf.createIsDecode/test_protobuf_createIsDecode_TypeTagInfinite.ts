import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createIsDecode_TypeTagInfinite =
    _test_protobuf_isDecode("TypeTagInfinite")<TypeTagInfinite>(
        TypeTagInfinite,
    )({
        isDecode: typia.protobuf.createIsDecode<TypeTagInfinite>(),
        encode: typia.protobuf.createEncode<TypeTagInfinite>(),
    });
