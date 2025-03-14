import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_protobuf_createIsDecode_TypeTagBigInt =
    _test_protobuf_isDecode("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)({
        isDecode: (input: Uint8Array): typia.Resolved<TypeTagBigInt> | null => {
            const is = (input: any): input is TypeTagBigInt => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "bigint" === typeof (input as any).value &&
                    "bigint" === typeof (input as any).ranged &&
                    BigInt(0) <= (input as any).ranged &&
                    (input as any).ranged <= BigInt(100) &&
                    "bigint" === typeof (input as any).minimum &&
                    BigInt(0) <= (input as any).minimum &&
                    "bigint" === typeof (input as any).maximum &&
                    (input as any).maximum <= BigInt(100) &&
                    "bigint" === typeof (input as any).multipleOf &&
                    (input as any).multipleOf % BigInt(3) === BigInt(0)
                );
            };
            const decode = (
                input: Uint8Array,
            ): typia.Resolved<TypeTagBigInt> => {
                const $Reader = (typia.protobuf.createIsDecode as any).Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: undefined as any,
                        ranged: undefined as any,
                        minimum: undefined as any,
                        maximum: undefined as any,
                        multipleOf: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                // int64;
                                output.value = reader.int64();
                                break;
                            case 2:
                                // int64;
                                output.ranged = reader.int64();
                                break;
                            case 3:
                                // int64;
                                output.minimum = reader.int64();
                                break;
                            case 4:
                                // int64;
                                output.maximum = reader.int64();
                                break;
                            case 5:
                                // int64;
                                output.multipleOf = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const reader = new $Reader(input);
                return $pdo0(reader);
            };
            const output = decode(input);
            if (!is(output)) return null;
            return output;
        },
        encode: (input: TypeTagBigInt): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    writer.uint32(8);
                    writer.int64(input.value);
                    // property "ranged";
                    writer.uint32(16);
                    writer.int64(input.ranged);
                    // property "minimum";
                    writer.uint32(24);
                    writer.int64(input.minimum);
                    // property "maximum";
                    writer.uint32(32);
                    writer.int64(input.maximum);
                    // property "multipleOf";
                    writer.uint32(40);
                    writer.int64(input.multipleOf);
                };
                //TypeTagBigInt;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
