import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_encode_ObjectHttpAtomic = _test_protobuf_encode(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
    encode: (input) => typia.protobuf.encode<ObjectHttpAtomic>(input),
    message: typia.protobuf.message<ObjectHttpAtomic>(),
    decode: typia.protobuf.createDecode<ObjectHttpAtomic>(),
});
