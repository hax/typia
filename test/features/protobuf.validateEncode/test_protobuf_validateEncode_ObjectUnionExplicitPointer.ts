import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_validateEncode_ObjectUnionExplicitPointer =
    _test_protobuf_validateEncode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ObjectUnionExplicitPointer>(input),
        message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
        decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
    });
