import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_createValidateStringify_MapUnion =
    _test_json_validateStringify("MapUnion")<MapUnion>(MapUnion)(
        typia.json.createValidateStringify<MapUnion>(),
    );
