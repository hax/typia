import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_createValidateStringify_SetSimple =
    _test_json_validateStringify("SetSimple")<SetSimple>(SetSimple)(
        typia.json.createValidateStringify<SetSimple>(),
    );
