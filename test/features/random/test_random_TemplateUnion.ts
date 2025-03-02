import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_random_TemplateUnion = _test_random(
    "TemplateUnion",
)<TemplateUnion>(TemplateUnion)({
    random: () => typia.random<TemplateUnion>(),
    assert: typia.createAssert<TemplateUnion>(),
});
