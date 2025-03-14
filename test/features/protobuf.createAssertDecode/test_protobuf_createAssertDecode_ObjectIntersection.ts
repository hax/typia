import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_protobuf_createAssertDecode_ObjectIntersection =
    _test_protobuf_assertDecode("ObjectIntersection")<ObjectIntersection>(
        ObjectIntersection,
    )({
        assertDecode: typia.protobuf.createAssertDecode<ObjectIntersection>(),
        encode: typia.protobuf.createEncode<ObjectIntersection>(),
    });
