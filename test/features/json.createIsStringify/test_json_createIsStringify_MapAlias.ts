import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { MapAlias } from "../../structures/MapAlias";

export const test_json_createIsStringify_MapAlias = _test_json_isStringify(
    "MapAlias",
)<MapAlias>(MapAlias)(typia.json.createIsStringify<MapAlias>());
