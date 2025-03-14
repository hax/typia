import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_assertDecode_TypeTagNaN =
    _test_protobuf_assertDecode("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)({
        assertDecode: (input) => typia.protobuf.assertDecode<TypeTagNaN>(input),
        encode: typia.protobuf.createEncode<TypeTagNaN>(),
    });
