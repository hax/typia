import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_createAssertPrune_DynamicConstant =
    _test_misc_assertPrune("DynamicConstant")<DynamicConstant>(DynamicConstant)(
        typia.misc.createAssertPrune<DynamicConstant>(),
    );
