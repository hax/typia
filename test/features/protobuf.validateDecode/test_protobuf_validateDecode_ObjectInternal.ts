import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_protobuf_validateDecode_ObjectInternal =
    _test_protobuf_validateDecode("ObjectInternal")<ObjectInternal>(
        ObjectInternal,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectInternal>(input),
        encode: typia.protobuf.createEncode<ObjectInternal>(),
    });
