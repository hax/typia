import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_validateParse_ObjectUndefined = _test_validateParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.validateParse<ObjectUndefined>(input),
    ObjectUndefined.SPOILERS,
);
