import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_protobuf_assertDecode_ClassGetter =
    _test_protobuf_assertDecode("ClassGetter")<ClassGetter>(ClassGetter)({
        assertDecode: (input) =>
            ((input: Uint8Array): typia.Resolved<ClassGetter> => {
                const decode = (
                    input: Uint8Array,
                ): typia.Resolved<ClassGetter> => {
                    const $Reader = (typia.protobuf.assertDecode as any).Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            id: "" as any,
                            name: "" as any,
                            dead: null as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    // string;
                                    output.id = reader.string();
                                    break;
                                case 2:
                                    // string;
                                    output.name = reader.string();
                                    break;
                                case 3:
                                    // bool;
                                    output.dead = reader.bool();
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
                const assert = (input: any): ClassGetter => {
                    const __is = (input: any): input is ClassGetter => {
                        const $io0 = (input: any): boolean =>
                            "string" === typeof input.id &&
                            "string" === typeof input.name &&
                            (null === input.dead ||
                                "boolean" === typeof input.dead);
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ClassGetter => {
                            const $guard = (typia.protobuf.assertDecode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ("string" === typeof input.id ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    })) &&
                                ("string" === typeof input.name ||
                                    $guard(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    })) &&
                                (null === input.dead ||
                                    "boolean" === typeof input.dead ||
                                    $guard(_exceptionable, {
                                        path: _path + ".dead",
                                        expected: "(boolean | null)",
                                        value: input.dead,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ClassGetter.Person",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ClassGetter.Person",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const output = decode(input);
                return assert(output) as any;
            })(input),
        encode: (input: ClassGetter): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "dead";
                    if (null !== input.dead) {
                        writer.uint32(24);
                        writer.bool(input.dead);
                    }
                };
                //ClassGetter.Person;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
