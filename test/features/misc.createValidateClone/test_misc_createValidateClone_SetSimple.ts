import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { SetSimple } from "../../structures/SetSimple";

export const test_misc_createValidateClone_SetSimple = _test_misc_validateClone(
    "SetSimple",
)<SetSimple>(SetSimple)(typia.misc.createValidateClone<SetSimple>());
