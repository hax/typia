import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_decode_MapSimpleProtobufOptional =
    _test_protobuf_decode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        decode: (input) =>
            typia.protobuf.decode<MapSimpleProtobufOptional>(input),
        encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
    });
