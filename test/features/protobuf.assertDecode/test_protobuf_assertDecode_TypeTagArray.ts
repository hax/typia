import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_assertDecode_TypeTagArray =
    _test_protobuf_assertDecode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TypeTagArray>(input),
        encode: typia.protobuf.createEncode<TypeTagArray>(),
    });
