import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_validateDecode_ObjectHttpUndefindable =
    _test_protobuf_validateDecode(
        "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectHttpUndefindable>(input),
        encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
    });
