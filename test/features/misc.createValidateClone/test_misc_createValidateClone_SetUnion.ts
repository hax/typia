import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_misc_createValidateClone_SetUnion = _test_misc_validateClone(
    "SetUnion",
)<SetUnion>(SetUnion)(typia.misc.createValidateClone<SetUnion>());
