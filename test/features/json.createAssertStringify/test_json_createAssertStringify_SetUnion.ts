import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_createAssertStringify_SetUnion =
    _test_json_assertStringify("SetUnion")<SetUnion>(SetUnion)(
        typia.json.createAssertStringify<SetUnion>(),
    );
