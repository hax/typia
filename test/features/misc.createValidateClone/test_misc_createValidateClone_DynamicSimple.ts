import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_misc_createValidateClone_DynamicSimple =
    _test_misc_validateClone("DynamicSimple")<DynamicSimple>(DynamicSimple)(
        typia.misc.createValidateClone<DynamicSimple>(),
    );
