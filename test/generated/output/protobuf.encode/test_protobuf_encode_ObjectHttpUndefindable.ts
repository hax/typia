import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_protobuf_encode_ObjectHttpUndefindable =
    _test_protobuf_encode("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable,
    )({
        encode: (input) =>
            ((input: ObjectHttpUndefindable): Uint8Array => {
                const $Sizer = (typia.protobuf.encode as any).Sizer;
                const $Writer = (typia.protobuf.encode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "boolean";
                        if (undefined !== input.boolean) {
                            writer.uint32(8);
                            writer.bool(input.boolean);
                        }
                        // property "bigint";
                        if (undefined !== input.bigint) {
                            writer.uint32(16);
                            writer.int64(input.bigint);
                        }
                        // property "number";
                        if (undefined !== input.number) {
                            writer.uint32(25);
                            writer.double(input.number);
                        }
                        // property "string";
                        if (undefined !== input.string) {
                            writer.uint32(34);
                            writer.string(input.string);
                        }
                        // property "constantBoolean";
                        if (undefined !== input.constantBoolean) {
                            writer.uint32(40);
                            writer.bool(input.constantBoolean);
                        }
                        // property "constantBigint";
                        if (undefined !== input.constantBigint) {
                            writer.uint32(48);
                            writer.uint64(input.constantBigint);
                        }
                        // property "constantNumber";
                        if (undefined !== input.constantNumber) {
                            writer.uint32(56);
                            writer.int32(input.constantNumber);
                        }
                        // property "constantString";
                        if (undefined !== input.constantString) {
                            writer.uint32(66);
                            writer.string(input.constantString);
                        }
                    };
                    //ObjectHttpUndefindable;
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectHttpUndefindable {\n    optional bool boolean = 1;\n    optional int64 bigint = 2;\n    optional double number = 3;\n    optional string string = 4;\n    optional bool constantBoolean = 5;\n    optional uint64 constantBigint = 6;\n    optional int32 constantNumber = 7;\n    optional string constantString = 8;\n}',
        decode: (input: Uint8Array): typia.Resolved<ObjectHttpUndefindable> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    boolean: undefined as any,
                    bigint: undefined as any,
                    number: undefined as any,
                    string: undefined as any,
                    constantBoolean: undefined as any,
                    constantBigint: undefined as any,
                    constantNumber: undefined as any,
                    constantString: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // bool;
                            output.boolean = reader.bool();
                            break;
                        case 2:
                            // int64;
                            output.bigint = reader.int64();
                            break;
                        case 3:
                            // double;
                            output.number = reader.double();
                            break;
                        case 4:
                            // string;
                            output.string = reader.string();
                            break;
                        case 5:
                            // bool;
                            output.constantBoolean = reader.bool();
                            break;
                        case 6:
                            // uint64;
                            output.constantBigint = reader.uint64();
                            break;
                        case 7:
                            // int32;
                            output.constantNumber = reader.int32();
                            break;
                        case 8:
                            // string;
                            output.constantString = reader.string();
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
        },
    });
