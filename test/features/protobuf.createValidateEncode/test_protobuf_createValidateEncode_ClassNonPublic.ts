import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createValidateEncode_ClassNonPublic =
    _test_protobuf_validateEncode("ClassNonPublic")<ClassNonPublic>(
        ClassNonPublic,
    )({
        validateEncode: typia.protobuf.createValidateEncode<ClassNonPublic>(),
        message: typia.protobuf.message<ClassNonPublic>(),
        decode: typia.protobuf.createDecode<ClassNonPublic>(),
    });
