import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_createStringify_NativeSimple = _test_json_stringify(
    "NativeSimple",
)<NativeSimple>(NativeSimple)(typia.json.createStringify<NativeSimple>());
