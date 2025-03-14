import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createValidateEncode_TemplateAtomic =
    _test_protobuf_validateEncode("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic,
    )({
        validateEncode: typia.protobuf.createValidateEncode<TemplateAtomic>(),
        message: typia.protobuf.message<TemplateAtomic>(),
        decode: typia.protobuf.createDecode<TemplateAtomic>(),
    });
