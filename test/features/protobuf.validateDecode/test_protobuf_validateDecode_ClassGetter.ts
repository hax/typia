import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_validateDecode_ClassGetter =
    _test_protobuf_validateDecode("ClassGetter")<ClassGetter>(ClassGetter)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ClassGetter>(input),
        encode: typia.protobuf.createEncode<ClassGetter>(),
    });
