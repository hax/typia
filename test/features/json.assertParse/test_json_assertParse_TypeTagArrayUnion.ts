import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_assertParse_TypeTagArrayUnion = _test_json_assertParse(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.json.assertParse<TypeTagArrayUnion>(input),
);
