import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_createValidateParse_ObjectInternal =
    _test_json_validateParse("ObjectInternal")<ObjectInternal>(ObjectInternal)(
        typia.json.createValidateParse<ObjectInternal>(),
    );
