import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createIsDecode_ClassPropertyAssignment =
    _test_protobuf_isDecode("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )({
        isDecode: typia.protobuf.createIsDecode<ClassPropertyAssignment>(),
        encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
    });
