import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_assertEncode_ClassGetter =
    _test_protobuf_assertEncode("ClassGetter")<ClassGetter>(ClassGetter)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ClassGetter>(input),
        message: typia.protobuf.message<ClassGetter>(),
        decode: typia.protobuf.createDecode<ClassGetter>(),
    });
