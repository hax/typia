import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_createRandom_ArraySimpleProtobufNullable = _test_random(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    random: typia.createRandom<ArraySimpleProtobufNullable>(),
    assert: typia.createAssert<ArraySimpleProtobufNullable>(),
});
