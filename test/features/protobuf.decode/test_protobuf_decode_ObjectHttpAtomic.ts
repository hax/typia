import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_decode_ObjectHttpAtomic = _test_protobuf_decode(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
    decode: (input) => typia.protobuf.decode<ObjectHttpAtomic>(input),
    encode: typia.protobuf.createEncode<ObjectHttpAtomic>(),
});
