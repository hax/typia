import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_validateDecode_ObjectLiteralType =
    _test_protobuf_validateDecode("ObjectLiteralType")<ObjectLiteralType>(
        ObjectLiteralType,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectLiteralType>(input),
        encode: typia.protobuf.createEncode<ObjectLiteralType>(),
    });
