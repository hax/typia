import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_misc_createValidateClone_NativeAlias =
    _test_misc_validateClone("NativeAlias")<NativeAlias>(NativeAlias)(
        typia.misc.createValidateClone<NativeAlias>(),
    );
