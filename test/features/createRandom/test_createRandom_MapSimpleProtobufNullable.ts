import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_createRandom_MapSimpleProtobufNullable = _test_random(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
    random: typia.createRandom<MapSimpleProtobufNullable>(),
    assert: typia.createAssert<MapSimpleProtobufNullable>(),
});
