import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { SetSimple } from "../../structures/SetSimple";

export const test_misc_createClone_SetSimple = _test_misc_clone(
    "SetSimple",
)<SetSimple>(SetSimple)(typia.misc.createClone<SetSimple>());
