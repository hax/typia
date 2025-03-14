import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_protobuf_validateDecode_ObjectNullable =
    _test_protobuf_validateDecode("ObjectNullable")<ObjectNullable>(
        ObjectNullable,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectNullable>(input),
        encode: typia.protobuf.createEncode<ObjectNullable>(),
    });
