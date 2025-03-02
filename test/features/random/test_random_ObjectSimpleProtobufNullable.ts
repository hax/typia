import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_random_ObjectSimpleProtobufNullable = _test_random(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    random: () => typia.random<ObjectSimpleProtobufNullable>(),
    assert: typia.createAssert<ObjectSimpleProtobufNullable>(),
});
