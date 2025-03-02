import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_createIsDecode_ObjectUnionCompositePointer =
    _test_protobuf_isDecode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        isDecode: typia.protobuf.createIsDecode<ObjectUnionCompositePointer>(),
        encode: typia.protobuf.createEncode<ObjectUnionCompositePointer>(),
    });
