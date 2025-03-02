import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_createValidateDecode_ObjectHttpArray =
    _test_protobuf_validateDecode("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray,
    )({
        validateDecode: typia.protobuf.createValidateDecode<ObjectHttpArray>(),
        encode: typia.protobuf.createEncode<ObjectHttpArray>(),
    });
