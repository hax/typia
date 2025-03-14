import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_validateDecode_TemplateConstant =
    _test_protobuf_validateDecode("TemplateConstant")<TemplateConstant>(
        TemplateConstant,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<TemplateConstant>(input),
        encode: typia.protobuf.createEncode<TemplateConstant>(),
    });
