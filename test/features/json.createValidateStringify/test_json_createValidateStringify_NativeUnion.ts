import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_json_createValidateStringify_NativeUnion =
    _test_json_validateStringify("NativeUnion")<NativeUnion>(NativeUnion)(
        typia.json.createValidateStringify<NativeUnion>(),
    );
