import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_createAssertDecode_ObjectHttpAtomic =
    _test_protobuf_assertDecode("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )({
        assertDecode: typia.protobuf.createAssertDecode<ObjectHttpAtomic>(),
        encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
    });
