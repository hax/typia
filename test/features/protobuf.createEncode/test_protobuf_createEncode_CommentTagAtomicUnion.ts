import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_createEncode_CommentTagAtomicUnion =
    _test_protobuf_encode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )({
        encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
        message: typia.protobuf.message<CommentTagAtomicUnion>(),
        decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
    });
