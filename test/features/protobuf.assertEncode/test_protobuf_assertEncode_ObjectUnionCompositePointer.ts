import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_assertEncode_ObjectUnionCompositePointer =
    _test_protobuf_assertEncode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectUnionCompositePointer>(input),
        message: typia.protobuf.message<ObjectUnionCompositePointer>(),
        decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
    });
