import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_createValidateStringify_SetUnion =
    _test_json_validateStringify("SetUnion")<SetUnion>(SetUnion)(
        typia.json.createValidateStringify<SetUnion>(),
    );
