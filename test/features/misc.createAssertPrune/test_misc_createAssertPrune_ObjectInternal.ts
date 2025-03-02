import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_misc_createAssertPrune_ObjectInternal =
    _test_misc_assertPrune("ObjectInternal")<ObjectInternal>(ObjectInternal)(
        typia.misc.createAssertPrune<ObjectInternal>(),
    );
