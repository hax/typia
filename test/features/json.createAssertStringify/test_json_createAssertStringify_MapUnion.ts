import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { MapUnion } from "../../structures/MapUnion";

export const test_json_createAssertStringify_MapUnion =
    _test_json_assertStringify("MapUnion")<MapUnion>(MapUnion)(
        typia.json.createAssertStringify<MapUnion>(),
    );
