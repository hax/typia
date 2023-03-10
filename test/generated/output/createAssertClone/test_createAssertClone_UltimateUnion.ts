import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { UltimateUnion } from "../../../structures/UltimateUnion";

export const test_createAssertClone_UltimateUnion = _test_assertClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input: any): typia.Primitive<UltimateUnion> => {
        const assert = (input: any): UltimateUnion => {
            const $guard = (typia.createAssertClone as any).guard;
            const $join = (typia.createAssertClone as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is UltimateUnion => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.schemas) ||
                        $guard(_exceptionable, {
                            path: _path + ".schemas",
                            expected:
                                'Array<(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)>',
                            value: input.schemas,
                        })) &&
                    input.schemas.every(
                        (elem: any, _index2: number) =>
                            (("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".schemas[" + _index2 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                })) &&
                            $au3(
                                elem,
                                _path + ".schemas[" + _index2 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    (("object" === typeof input.components &&
                        null !== input.components) ||
                        $guard(_exceptionable, {
                            path: _path + ".components",
                            expected: "IJsonComponents",
                            value: input.components,
                        })) &&
                    $ao33(
                        input.components,
                        _path + ".components",
                        true && _exceptionable,
                    ) &&
                    ("ajv" === input.purpose ||
                        "swagger" === input.purpose ||
                        $guard(_exceptionable, {
                            path: _path + ".purpose",
                            expected: '("ajv" | "swagger")',
                            value: input.purpose,
                        })) &&
                    ("string" === typeof input.prefix ||
                        $guard(_exceptionable, {
                            path: _path + ".prefix",
                            expected: "string",
                            value: input.prefix,
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<boolean>",
                            value: input["enum"],
                        })) &&
                    input["enum"].every(
                        (elem: any, _index3: number) =>
                            "boolean" === typeof elem ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"][' + _index3 + "]",
                                expected: "boolean",
                                value: elem,
                            }),
                    ) &&
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(boolean | undefined)",
                            value: input["default"],
                        })) &&
                    ("boolean" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"boolean"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index4: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index4 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index4 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index5: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index5 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index5 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("items" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"items"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("minItems" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"minItems"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("maxItems" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"maxItems"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("format" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"format"',
                            value: input.kind,
                        })) &&
                    ("url" === input.value ||
                        "uuid" === input.value ||
                        "email" === input.value ||
                        "ipv4" === input.value ||
                        "ipv6" === input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                '("email" | "ipv4" | "ipv6" | "url" | "uuid")',
                            value: input.value,
                        }));
                const $ao6 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("pattern" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"pattern"',
                            value: input.kind,
                        })) &&
                    ("string" === typeof input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "string",
                            value: input.value,
                        }));
                const $ao7 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("length" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"length"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao8 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("minLength" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"minLength"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao9 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("maxLength" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"maxLength"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao10 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("type" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"type"',
                            value: input.kind,
                        })) &&
                    ("int" === input.value ||
                        "uint" === input.value ||
                        "int32" === input.value ||
                        "uint32" === input.value ||
                        "int64" === input.value ||
                        "uint64" === input.value ||
                        "float" === input.value ||
                        "double" === input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                '("double" | "float" | "int" | "int32" | "int64" | "uint" | "uint32" | "uint64")',
                            value: input.value,
                        }));
                const $ao11 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("type" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"type"',
                            value: input.kind,
                        })) &&
                    ("int64" === input.value ||
                        "uint64" === input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: '("int64" | "uint64")',
                            value: input.value,
                        }));
                const $ao12 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("minimum" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"minimum"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao13 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("maximum" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"maximum"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao14 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("exclusiveMinimum" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"exclusiveMinimum"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao15 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("exclusiveMaximum" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"exclusiveMaximum"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao16 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("multipleOf" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"multipleOf"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao17 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("step" === input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: '"step"',
                            value: input.kind,
                        })) &&
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }));
                const $ao18 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (undefined === input.text ||
                        ((Array.isArray(input.text) ||
                            $guard(_exceptionable, {
                                path: _path + ".text",
                                expected:
                                    "(Array<IJsDocTagInfo.IText> | undefined)",
                                value: input.text,
                            })) &&
                            input.text.every(
                                (elem: any, _index6: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".text[" +
                                                _index6 +
                                                "]",
                                            expected: "IJsDocTagInfo.IText",
                                            value: elem,
                                        })) &&
                                    $ao19(
                                        elem,
                                        _path + ".text[" + _index6 + "]",
                                        true && _exceptionable,
                                    ),
                            )));
                const $ao19 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.text ||
                        $guard(_exceptionable, {
                            path: _path + ".text",
                            expected: "string",
                            value: input.text,
                        })) &&
                    ("string" === typeof input.kind ||
                        $guard(_exceptionable, {
                            path: _path + ".kind",
                            expected: "string",
                            value: input.kind,
                        }));
                const $ao20 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<number>",
                            value: input["enum"],
                        })) &&
                    input["enum"].every(
                        (elem: any, _index7: number) =>
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"][' + _index7 + "]",
                                expected: "number",
                                value: elem,
                            }),
                    ) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("number" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"number"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index8: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index8 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index8 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index9: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index9 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index9 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao21 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input["enum"]) ||
                        $guard(_exceptionable, {
                            path: _path + '["enum"]',
                            expected: "Array<string>",
                            value: input["enum"],
                        })) &&
                    input["enum"].every(
                        (elem: any, _index10: number) =>
                            "string" === typeof elem ||
                            $guard(_exceptionable, {
                                path: _path + '["enum"][' + _index10 + "]",
                                expected: "string",
                                value: elem,
                            }),
                    ) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(string | undefined)",
                            value: input["default"],
                        })) &&
                    ("string" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"string"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index11: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index11 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index11 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index12: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index12 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index12 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao22 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input["default"] ||
                        "boolean" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(boolean | undefined)",
                            value: input["default"],
                        })) &&
                    ("boolean" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"boolean"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index13: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index13 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index13 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index14: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index14 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index14 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao23 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum) &&
                            parseInt(input.minimum) === input.minimum) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "(number | undefined)",
                            value: input.minimum,
                        })) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum) &&
                            parseInt(input.maximum) === input.maximum) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "(number | undefined)",
                            value: input.maximum,
                        })) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMinimum,
                        })) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMaximum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMaximum,
                        })) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Number.isFinite(input.multipleOf) &&
                            parseInt(input.multipleOf) === input.multipleOf) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "(number | undefined)",
                            value: input.multipleOf,
                        })) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("integer" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"integer"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index15: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index15 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index15 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index16: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index16 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index16 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao24 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minimum ||
                        ("number" === typeof input.minimum &&
                            Number.isFinite(input.minimum)) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "(number | undefined)",
                            value: input.minimum,
                        })) &&
                    (undefined === input.maximum ||
                        ("number" === typeof input.maximum &&
                            Number.isFinite(input.maximum)) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "(number | undefined)",
                            value: input.maximum,
                        })) &&
                    (undefined === input.exclusiveMinimum ||
                        "boolean" === typeof input.exclusiveMinimum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMinimum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMinimum,
                        })) &&
                    (undefined === input.exclusiveMaximum ||
                        "boolean" === typeof input.exclusiveMaximum ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusiveMaximum",
                            expected: "(boolean | undefined)",
                            value: input.exclusiveMaximum,
                        })) &&
                    (undefined === input.multipleOf ||
                        ("number" === typeof input.multipleOf &&
                            Number.isFinite(input.multipleOf)) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "(number | undefined)",
                            value: input.multipleOf,
                        })) &&
                    (undefined === input["default"] ||
                        ("number" === typeof input["default"] &&
                            Number.isFinite(input["default"])) ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(number | undefined)",
                            value: input["default"],
                        })) &&
                    ("number" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"number"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index17: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index17 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index17 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index18: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index18 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index18 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao25 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.minLength ||
                        ("number" === typeof input.minLength &&
                            Number.isFinite(input.minLength) &&
                            parseInt(input.minLength) === input.minLength &&
                            0 <= input.minLength) ||
                        $guard(_exceptionable, {
                            path: _path + ".minLength",
                            expected: "(number | undefined)",
                            value: input.minLength,
                        })) &&
                    (undefined === input.maxLength ||
                        ("number" === typeof input.maxLength &&
                            Number.isFinite(input.maxLength) &&
                            parseInt(input.maxLength) === input.maxLength &&
                            0 <= input.maxLength) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxLength",
                            expected: "(number | undefined)",
                            value: input.maxLength,
                        })) &&
                    (undefined === input.pattern ||
                        "string" === typeof input.pattern ||
                        $guard(_exceptionable, {
                            path: _path + ".pattern",
                            expected: "(string | undefined)",
                            value: input.pattern,
                        })) &&
                    (undefined === input.format ||
                        "string" === typeof input.format ||
                        $guard(_exceptionable, {
                            path: _path + ".format",
                            expected: "(string | undefined)",
                            value: input.format,
                        })) &&
                    (undefined === input["default"] ||
                        "string" === typeof input["default"] ||
                        $guard(_exceptionable, {
                            path: _path + '["default"]',
                            expected: "(string | undefined)",
                            value: input["default"],
                        })) &&
                    ("string" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"string"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index19: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index19 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index19 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index20: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index20 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index20 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao26 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items)) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                            value: input.items,
                        })) &&
                    $au3(
                        input.items,
                        _path + ".items",
                        true && _exceptionable,
                    ) &&
                    (undefined === input.minItems ||
                        ("number" === typeof input.minItems &&
                            Number.isFinite(input.minItems) &&
                            parseInt(input.minItems) === input.minItems &&
                            0 <= input.minItems) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "(number | undefined)",
                            value: input.minItems,
                        })) &&
                    (undefined === input.maxItems ||
                        ("number" === typeof input.maxItems &&
                            Number.isFinite(input.maxItems) &&
                            parseInt(input.maxItems) === input.maxItems &&
                            0 <= input.maxItems) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: "(number | undefined)",
                            value: input.maxItems,
                        })) &&
                    (undefined === input["x-typia-tuple"] ||
                        ((("object" === typeof input["x-typia-tuple"] &&
                            null !== input["x-typia-tuple"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-tuple"]',
                                expected: "(IJsonSchema.ITuple | undefined)",
                                value: input["x-typia-tuple"],
                            })) &&
                            $ao27(
                                input["x-typia-tuple"],
                                _path + '["x-typia-tuple"]',
                                true && _exceptionable,
                            ))) &&
                    ("array" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"array"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index21: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index21 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index21 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index22: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index22 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index22 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao27 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.items) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                'Array<(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)>',
                            value: input.items,
                        })) &&
                    input.items.every(
                        (elem: any, _index23: number) =>
                            (("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index23 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                })) &&
                            $au2(
                                elem,
                                _path + ".items[" + _index23 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    ("array" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"array"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index24: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index24 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index24 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index25: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index25 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index25 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao28 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.oneOf) ||
                        $guard(_exceptionable, {
                            path: _path + ".oneOf",
                            expected:
                                'Array<(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)>',
                            value: input.oneOf,
                        })) &&
                    input.oneOf.every(
                        (elem: any, _index26: number) =>
                            (("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".oneOf[" + _index26 + "]",
                                    expected:
                                        '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                    value: elem,
                                })) &&
                            $au1(
                                elem,
                                _path + ".oneOf[" + _index26 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index27: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index27 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index27 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index28: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index28 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index28 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao29 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.$ref ||
                        $guard(_exceptionable, {
                            path: _path + ".$ref",
                            expected: "string",
                            value: input.$ref,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index29: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index29 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index29 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index30: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index30 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index30 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao30 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.$recursiveRef ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveRef",
                            expected: "string",
                            value: input.$recursiveRef,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index31: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index31 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index31 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index32: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index32 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index32 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao31 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("null" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"null"',
                            value: input.type,
                        })) &&
                    (undefined === input.deprecated ||
                        "boolean" === typeof input.deprecated ||
                        $guard(_exceptionable, {
                            path: _path + ".deprecated",
                            expected: "(boolean | undefined)",
                            value: input.deprecated,
                        })) &&
                    (undefined === input.title ||
                        "string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "(string | undefined)",
                            value: input.title,
                        })) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-metaTags"] ||
                        ((Array.isArray(input["x-typia-metaTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-metaTags"]',
                                expected:
                                    "(Array<(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)> | undefined)",
                                value: input["x-typia-metaTags"],
                            })) &&
                            input["x-typia-metaTags"].every(
                                (elem: any, _index33: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-metaTags"][' +
                                                _index33 +
                                                "]",
                                            expected:
                                                "(IMetadataTag.IBigintType | IMetadataTag.IExclusiveMaximum | IMetadataTag.IExclusiveMinimum | IMetadataTag.IFormat | IMetadataTag.IItems | IMetadataTag.ILength | IMetadataTag.IMaxItems | IMetadataTag.IMaxLength | IMetadataTag.IMaximum | IMetadataTag.IMinItems | IMetadataTag.IMinLength | IMetadataTag.IMinimum | IMetadataTag.IMultipleOf | IMetadataTag.INumberType | IMetadataTag.IPattern | IMetadataTag.IStep)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path +
                                            '["x-typia-metaTags"][' +
                                            _index33 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index34: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index34 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index34 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-required"] ||
                        "boolean" === typeof input["x-typia-required"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-required"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-required"],
                        })) &&
                    (undefined === input["x-typia-rest"] ||
                        "boolean" === typeof input["x-typia-rest"] ||
                        $guard(_exceptionable, {
                            path: _path + '["x-typia-rest"]',
                            expected: "(boolean | undefined)",
                            value: input["x-typia-rest"],
                        }));
                const $ao32 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean => true;
                const $ao33 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("object" === typeof input.schemas &&
                        null !== input.schemas &&
                        false === Array.isArray(input.schemas)) ||
                        $guard(_exceptionable, {
                            path: _path + ".schemas",
                            expected: "Record<string, IJsonComponents.IObject>",
                            value: input.schemas,
                        })) &&
                    $ao34(
                        input.schemas,
                        _path + ".schemas",
                        true && _exceptionable,
                    );
                const $ao34 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                (("object" === typeof value &&
                                    null !== value) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "IJsonComponents.IObject",
                                        value: value,
                                    })) &&
                                $ao35(
                                    value,
                                    _path + $join(key),
                                    true && _exceptionable,
                                )
                            );
                        return true;
                    });
                const $ao35 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.$id ||
                        "string" === typeof input.$id ||
                        $guard(_exceptionable, {
                            path: _path + ".$id",
                            expected: "(string | undefined)",
                            value: input.$id,
                        })) &&
                    (undefined === input.$recursiveAnchor ||
                        "boolean" === typeof input.$recursiveAnchor ||
                        $guard(_exceptionable, {
                            path: _path + ".$recursiveAnchor",
                            expected: "(boolean | undefined)",
                            value: input.$recursiveAnchor,
                        })) &&
                    ("object" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"object"',
                            value: input.type,
                        })) &&
                    ("boolean" === typeof input.nullable ||
                        $guard(_exceptionable, {
                            path: _path + ".nullable",
                            expected: "boolean",
                            value: input.nullable,
                        })) &&
                    (("object" === typeof input.properties &&
                        null !== input.properties &&
                        false === Array.isArray(input.properties)) ||
                        $guard(_exceptionable, {
                            path: _path + ".properties",
                            expected: "Record<string, IJsonSchema>",
                            value: input.properties,
                        })) &&
                    $ao36(
                        input.properties,
                        _path + ".properties",
                        true && _exceptionable,
                    ) &&
                    (undefined === input.patternProperties ||
                        ((("object" === typeof input.patternProperties &&
                            null !== input.patternProperties &&
                            false === Array.isArray(input.patternProperties)) ||
                            $guard(_exceptionable, {
                                path: _path + ".patternProperties",
                                expected:
                                    "(Record<string, IJsonSchema> | undefined)",
                                value: input.patternProperties,
                            })) &&
                            $ao36(
                                input.patternProperties,
                                _path + ".patternProperties",
                                true && _exceptionable,
                            ))) &&
                    (undefined === input.additionalProperties ||
                        ((("object" === typeof input.additionalProperties &&
                            null !== input.additionalProperties &&
                            false ===
                                Array.isArray(input.additionalProperties)) ||
                            $guard(_exceptionable, {
                                path: _path + ".additionalProperties",
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                value: input.additionalProperties,
                            })) &&
                            $au3(
                                input.additionalProperties,
                                _path + ".additionalProperties",
                                true && _exceptionable,
                            ))) &&
                    (undefined === input.required ||
                        ((Array.isArray(input.required) ||
                            $guard(_exceptionable, {
                                path: _path + ".required",
                                expected: "(Array<string> | undefined)",
                                value: input.required,
                            })) &&
                            input.required.every(
                                (elem: any, _index35: number) =>
                                    "string" === typeof elem ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".required[" +
                                            _index35 +
                                            "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            ))) &&
                    (undefined === input.description ||
                        "string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "(string | undefined)",
                            value: input.description,
                        })) &&
                    (undefined === input["x-typia-jsDocTags"] ||
                        ((Array.isArray(input["x-typia-jsDocTags"]) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-jsDocTags"]',
                                expected: "(Array<IJsDocTagInfo> | undefined)",
                                value: input["x-typia-jsDocTags"],
                            })) &&
                            input["x-typia-jsDocTags"].every(
                                (elem: any, _index36: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                '["x-typia-jsDocTags"][' +
                                                _index36 +
                                                "]",
                                            expected: "IJsDocTagInfo",
                                            value: elem,
                                        })) &&
                                    $ao18(
                                        elem,
                                        _path +
                                            '["x-typia-jsDocTags"][' +
                                            _index36 +
                                            "]",
                                        true && _exceptionable,
                                    ),
                            ))) &&
                    (undefined === input["x-typia-patternProperties"] ||
                        ((("object" ===
                            typeof input["x-typia-patternProperties"] &&
                            null !== input["x-typia-patternProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-patternProperties"],
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + '["x-typia-patternProperties"]',
                                expected:
                                    "(Record<string, IJsonSchema> | undefined)",
                                value: input["x-typia-patternProperties"],
                            })) &&
                            $ao36(
                                input["x-typia-patternProperties"],
                                _path + '["x-typia-patternProperties"]',
                                true && _exceptionable,
                            ))) &&
                    (undefined === input["x-typia-additionalProperties"] ||
                        ((("object" ===
                            typeof input["x-typia-additionalProperties"] &&
                            null !== input["x-typia-additionalProperties"] &&
                            false ===
                                Array.isArray(
                                    input["x-typia-additionalProperties"],
                                )) ||
                            $guard(_exceptionable, {
                                path:
                                    _path + '["x-typia-additionalProperties"]',
                                expected:
                                    '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown | undefined)',
                                value: input["x-typia-additionalProperties"],
                            })) &&
                            $au3(
                                input["x-typia-additionalProperties"],
                                _path + '["x-typia-additionalProperties"]',
                                true && _exceptionable,
                            )));
                const $ao36 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                (("object" === typeof value &&
                                    null !== value &&
                                    false === Array.isArray(value)) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected:
                                            '(IJsonSchema.IArray | IJsonSchema.IBoolean | IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IInteger | IJsonSchema.INullOnly | IJsonSchema.INumber | IJsonSchema.IOneOf | IJsonSchema.IRecursiveReference | IJsonSchema.IReference | IJsonSchema.IString | IJsonSchema.ITuple | IJsonSchema.IUnknown)',
                                        value: value,
                                    })) &&
                                $au3(
                                    value,
                                    _path + $join(key),
                                    true && _exceptionable,
                                )
                            );
                        return true;
                    });
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("items" === input.kind)
                            return $ao2(input, _path, true && _exceptionable);
                        if ("minItems" === input.kind)
                            return $ao3(input, _path, true && _exceptionable);
                        if ("maxItems" === input.kind)
                            return $ao4(input, _path, true && _exceptionable);
                        if ("format" === input.kind)
                            return $ao5(input, _path, true && _exceptionable);
                        if ("pattern" === input.kind)
                            return $ao6(input, _path, true && _exceptionable);
                        if ("length" === input.kind)
                            return $ao7(input, _path, true && _exceptionable);
                        if ("minLength" === input.kind)
                            return $ao8(input, _path, true && _exceptionable);
                        if ("maxLength" === input.kind)
                            return $ao9(input, _path, true && _exceptionable);
                        if ("minimum" === input.kind)
                            return $ao12(input, _path, true && _exceptionable);
                        if ("maximum" === input.kind)
                            return $ao13(input, _path, true && _exceptionable);
                        if ("exclusiveMinimum" === input.kind)
                            return $ao14(input, _path, true && _exceptionable);
                        if ("exclusiveMaximum" === input.kind)
                            return $ao15(input, _path, true && _exceptionable);
                        if ("multipleOf" === input.kind)
                            return $ao16(input, _path, true && _exceptionable);
                        if ("step" === input.kind)
                            return $ao17(input, _path, true && _exceptionable);
                        return (
                            $ao10(input, _path, false && _exceptionable) ||
                            $ao11(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(IMetadataTag.INumberType | IMetadataTag.IBigintType)",
                                value: input,
                            })
                        );
                    })();
                const $au1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("integer" === input.type)
                            return $ao23(input, _path, true && _exceptionable);
                        if (undefined !== input.oneOf)
                            return $ao28(input, _path, true && _exceptionable);
                        if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any, _index37: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $au2(
                                        elem,
                                        _path + ".items[" + _index37 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao27(input, _path, true && _exceptionable);
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $au3(
                                input.items,
                                _path + ".items",
                                false && _exceptionable,
                            )
                        )
                            return $ao26(input, _path, true && _exceptionable);
                        if (undefined !== input.$ref)
                            return $ao29(input, _path, true && _exceptionable);
                        if (undefined !== input.$recursiveRef)
                            return $ao30(input, _path, true && _exceptionable);
                        if ("null" === input.type)
                            return $ao31(input, _path, true && _exceptionable);
                        return (
                            $ao1(input, _path, false && _exceptionable) ||
                            $ao20(input, _path, false && _exceptionable) ||
                            $ao21(input, _path, false && _exceptionable) ||
                            $ao22(input, _path, false && _exceptionable) ||
                            $ao24(input, _path, false && _exceptionable) ||
                            $ao25(input, _path, false && _exceptionable) ||
                            $ao32(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                value: input,
                            })
                        );
                    })();
                const $au2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("integer" === input.type)
                            return $ao23(input, _path, true && _exceptionable);
                        if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any, _index38: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $au2(
                                        elem,
                                        _path + ".items[" + _index38 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao27(input, _path, true && _exceptionable);
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $au3(
                                input.items,
                                _path + ".items",
                                false && _exceptionable,
                            )
                        )
                            return $ao26(input, _path, true && _exceptionable);
                        if (undefined !== input.oneOf)
                            return $ao28(input, _path, true && _exceptionable);
                        if (undefined !== input.$ref)
                            return $ao29(input, _path, true && _exceptionable);
                        if (undefined !== input.$recursiveRef)
                            return $ao30(input, _path, true && _exceptionable);
                        if ("null" === input.type)
                            return $ao31(input, _path, true && _exceptionable);
                        return (
                            $ao1(input, _path, false && _exceptionable) ||
                            $ao20(input, _path, false && _exceptionable) ||
                            $ao21(input, _path, false && _exceptionable) ||
                            $ao22(input, _path, false && _exceptionable) ||
                            $ao24(input, _path, false && _exceptionable) ||
                            $ao25(input, _path, false && _exceptionable) ||
                            $ao32(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                value: input,
                            })
                        );
                    })();
                const $au3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("integer" === input.type)
                            return $ao23(input, _path, true && _exceptionable);
                        if (
                            "object" === typeof input.items &&
                            null !== input.items &&
                            false === Array.isArray(input.items) &&
                            $au3(
                                input.items,
                                _path + ".items",
                                false && _exceptionable,
                            )
                        )
                            return $ao26(input, _path, true && _exceptionable);
                        if (
                            Array.isArray(input.items) &&
                            input.items.every(
                                (elem: any, _index39: number) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $au2(
                                        elem,
                                        _path + ".items[" + _index39 + "]",
                                        false && _exceptionable,
                                    ),
                            )
                        )
                            return $ao27(input, _path, true && _exceptionable);
                        if (undefined !== input.oneOf)
                            return $ao28(input, _path, true && _exceptionable);
                        if (undefined !== input.$ref)
                            return $ao29(input, _path, true && _exceptionable);
                        if (undefined !== input.$recursiveRef)
                            return $ao30(input, _path, true && _exceptionable);
                        if ("null" === input.type)
                            return $ao31(input, _path, true && _exceptionable);
                        return (
                            $ao1(input, _path, false && _exceptionable) ||
                            $ao20(input, _path, false && _exceptionable) ||
                            $ao21(input, _path, false && _exceptionable) ||
                            $ao22(input, _path, false && _exceptionable) ||
                            $ao24(input, _path, false && _exceptionable) ||
                            $ao25(input, _path, false && _exceptionable) ||
                            $ao32(input, _path, false && _exceptionable) ||
                            $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                                value: input,
                            })
                        );
                    })();
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<IJsonApplication>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "IJsonApplication",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (
            input: UltimateUnion,
        ): typia.Primitive<UltimateUnion> => {
            const $join = (typia.createAssertClone as any).join;
            const $throws = (typia.createAssertClone as any).throws;
            const $io1 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "boolean" === typeof elem) &&
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io2 = (input: any): boolean =>
                "items" === input.kind && "number" === typeof input.value;
            const $io3 = (input: any): boolean =>
                "minItems" === input.kind && "number" === typeof input.value;
            const $io4 = (input: any): boolean =>
                "maxItems" === input.kind && "number" === typeof input.value;
            const $io5 = (input: any): boolean =>
                "format" === input.kind &&
                ("url" === input.value ||
                    "uuid" === input.value ||
                    "email" === input.value ||
                    "ipv4" === input.value ||
                    "ipv6" === input.value);
            const $io6 = (input: any): boolean =>
                "pattern" === input.kind && "string" === typeof input.value;
            const $io7 = (input: any): boolean =>
                "length" === input.kind && "number" === typeof input.value;
            const $io8 = (input: any): boolean =>
                "minLength" === input.kind && "number" === typeof input.value;
            const $io9 = (input: any): boolean =>
                "maxLength" === input.kind && "number" === typeof input.value;
            const $io10 = (input: any): boolean =>
                "type" === input.kind &&
                ("int" === input.value ||
                    "uint" === input.value ||
                    "int32" === input.value ||
                    "uint32" === input.value ||
                    "int64" === input.value ||
                    "uint64" === input.value ||
                    "float" === input.value ||
                    "double" === input.value);
            const $io11 = (input: any): boolean =>
                "type" === input.kind &&
                ("int64" === input.value || "uint64" === input.value);
            const $io12 = (input: any): boolean =>
                "minimum" === input.kind && "number" === typeof input.value;
            const $io13 = (input: any): boolean =>
                "maximum" === input.kind && "number" === typeof input.value;
            const $io14 = (input: any): boolean =>
                "exclusiveMinimum" === input.kind &&
                "number" === typeof input.value;
            const $io15 = (input: any): boolean =>
                "exclusiveMaximum" === input.kind &&
                "number" === typeof input.value;
            const $io16 = (input: any): boolean =>
                "multipleOf" === input.kind && "number" === typeof input.value;
            const $io17 = (input: any): boolean =>
                "step" === input.kind && "number" === typeof input.value;
            const $io18 = (input: any): boolean =>
                "string" === typeof input.name &&
                (undefined === input.text ||
                    (Array.isArray(input.text) &&
                        input.text.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io19(elem),
                        )));
            const $io19 = (input: any): boolean =>
                "string" === typeof input.text &&
                "string" === typeof input.kind;
            const $io20 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "number" === typeof elem) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io21 = (input: any): boolean =>
                Array.isArray(input["enum"]) &&
                input["enum"].every((elem: any) => "string" === typeof elem) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io22 = (input: any): boolean =>
                (undefined === input["default"] ||
                    "boolean" === typeof input["default"]) &&
                "boolean" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io23 = (input: any): boolean =>
                (undefined === input.minimum ||
                    ("number" === typeof input.minimum &&
                        parseInt(input.minimum) === input.minimum)) &&
                (undefined === input.maximum ||
                    ("number" === typeof input.maximum &&
                        parseInt(input.maximum) === input.maximum)) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    ("number" === typeof input.multipleOf &&
                        parseInt(input.multipleOf) === input.multipleOf)) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "integer" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io24 = (input: any): boolean =>
                (undefined === input.minimum ||
                    "number" === typeof input.minimum) &&
                (undefined === input.maximum ||
                    "number" === typeof input.maximum) &&
                (undefined === input.exclusiveMinimum ||
                    "boolean" === typeof input.exclusiveMinimum) &&
                (undefined === input.exclusiveMaximum ||
                    "boolean" === typeof input.exclusiveMaximum) &&
                (undefined === input.multipleOf ||
                    "number" === typeof input.multipleOf) &&
                (undefined === input["default"] ||
                    "number" === typeof input["default"]) &&
                "number" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io25 = (input: any): boolean =>
                (undefined === input.minLength ||
                    ("number" === typeof input.minLength &&
                        parseInt(input.minLength) === input.minLength &&
                        0 <= input.minLength)) &&
                (undefined === input.maxLength ||
                    ("number" === typeof input.maxLength &&
                        parseInt(input.maxLength) === input.maxLength &&
                        0 <= input.maxLength)) &&
                (undefined === input.pattern ||
                    "string" === typeof input.pattern) &&
                (undefined === input.format ||
                    "string" === typeof input.format) &&
                (undefined === input["default"] ||
                    "string" === typeof input["default"]) &&
                "string" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io26 = (input: any): boolean =>
                "object" === typeof input.items &&
                null !== input.items &&
                false === Array.isArray(input.items) &&
                $iu3(input.items) &&
                (undefined === input.minItems ||
                    ("number" === typeof input.minItems &&
                        parseInt(input.minItems) === input.minItems &&
                        0 <= input.minItems)) &&
                (undefined === input.maxItems ||
                    ("number" === typeof input.maxItems &&
                        parseInt(input.maxItems) === input.maxItems &&
                        0 <= input.maxItems)) &&
                (undefined === input["x-typia-tuple"] ||
                    ("object" === typeof input["x-typia-tuple"] &&
                        null !== input["x-typia-tuple"] &&
                        $io27(input["x-typia-tuple"]))) &&
                "array" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io27 = (input: any): boolean =>
                Array.isArray(input.items) &&
                input.items.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu2(elem),
                ) &&
                "array" === input.type &&
                "boolean" === typeof input.nullable &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io28 = (input: any): boolean =>
                Array.isArray(input.oneOf) &&
                input.oneOf.every(
                    (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $iu1(elem),
                ) &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io29 = (input: any): boolean =>
                "string" === typeof input.$ref &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io30 = (input: any): boolean =>
                "string" === typeof input.$recursiveRef &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io31 = (input: any): boolean =>
                "null" === input.type &&
                (undefined === input.deprecated ||
                    "boolean" === typeof input.deprecated) &&
                (undefined === input.title ||
                    "string" === typeof input.title) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-metaTags"] ||
                    (Array.isArray(input["x-typia-metaTags"]) &&
                        input["x-typia-metaTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        ))) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-required"] ||
                    "boolean" === typeof input["x-typia-required"]) &&
                (undefined === input["x-typia-rest"] ||
                    "boolean" === typeof input["x-typia-rest"]);
            const $io32 = (input: any): boolean => true;
            const $io33 = (input: any): boolean =>
                "object" === typeof input.schemas &&
                null !== input.schemas &&
                false === Array.isArray(input.schemas) &&
                $io34(input.schemas);
            const $io34 = (input: any): boolean =>
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            $io35(value)
                        );
                    return true;
                });
            const $io35 = (input: any): boolean =>
                (undefined === input.$id || "string" === typeof input.$id) &&
                (undefined === input.$recursiveAnchor ||
                    "boolean" === typeof input.$recursiveAnchor) &&
                "object" === input.type &&
                "boolean" === typeof input.nullable &&
                "object" === typeof input.properties &&
                null !== input.properties &&
                false === Array.isArray(input.properties) &&
                $io36(input.properties) &&
                (undefined === input.patternProperties ||
                    ("object" === typeof input.patternProperties &&
                        null !== input.patternProperties &&
                        false === Array.isArray(input.patternProperties) &&
                        $io36(input.patternProperties))) &&
                (undefined === input.additionalProperties ||
                    ("object" === typeof input.additionalProperties &&
                        null !== input.additionalProperties &&
                        false === Array.isArray(input.additionalProperties) &&
                        $iu3(input.additionalProperties))) &&
                (undefined === input.required ||
                    (Array.isArray(input.required) &&
                        input.required.every(
                            (elem: any) => "string" === typeof elem,
                        ))) &&
                (undefined === input.description ||
                    "string" === typeof input.description) &&
                (undefined === input["x-typia-jsDocTags"] ||
                    (Array.isArray(input["x-typia-jsDocTags"]) &&
                        input["x-typia-jsDocTags"].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io18(elem),
                        ))) &&
                (undefined === input["x-typia-patternProperties"] ||
                    ("object" === typeof input["x-typia-patternProperties"] &&
                        null !== input["x-typia-patternProperties"] &&
                        false ===
                            Array.isArray(input["x-typia-patternProperties"]) &&
                        $io36(input["x-typia-patternProperties"]))) &&
                (undefined === input["x-typia-additionalProperties"] ||
                    ("object" ===
                        typeof input["x-typia-additionalProperties"] &&
                        null !== input["x-typia-additionalProperties"] &&
                        false ===
                            Array.isArray(
                                input["x-typia-additionalProperties"],
                            ) &&
                        $iu3(input["x-typia-additionalProperties"])));
            const $io36 = (input: any): boolean =>
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $iu3(value)
                        );
                    return true;
                });
            const $iu0 = (input: any): any =>
                (() => {
                    if ("items" === input.kind) return $io2(input);
                    if ("minItems" === input.kind) return $io3(input);
                    if ("maxItems" === input.kind) return $io4(input);
                    if ("format" === input.kind) return $io5(input);
                    if ("pattern" === input.kind) return $io6(input);
                    if ("length" === input.kind) return $io7(input);
                    if ("minLength" === input.kind) return $io8(input);
                    if ("maxLength" === input.kind) return $io9(input);
                    if ("minimum" === input.kind) return $io12(input);
                    if ("maximum" === input.kind) return $io13(input);
                    if ("exclusiveMinimum" === input.kind) return $io14(input);
                    if ("exclusiveMaximum" === input.kind) return $io15(input);
                    if ("multipleOf" === input.kind) return $io16(input);
                    if ("step" === input.kind) return $io17(input);
                    return $io10(input) || $io11(input);
                })();
            const $iu1 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io23(input);
                    if (undefined !== input.oneOf) return $io28(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io27(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io26(input);
                    if (undefined !== input.$ref) return $io29(input);
                    if (undefined !== input.$recursiveRef) return $io30(input);
                    if ("null" === input.type) return $io31(input);
                    return (
                        $io1(input) ||
                        $io20(input) ||
                        $io21(input) ||
                        $io22(input) ||
                        $io24(input) ||
                        $io25(input) ||
                        $io32(input)
                    );
                })();
            const $iu2 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io23(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io27(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io26(input);
                    if (undefined !== input.oneOf) return $io28(input);
                    if (undefined !== input.$ref) return $io29(input);
                    if (undefined !== input.$recursiveRef) return $io30(input);
                    if ("null" === input.type) return $io31(input);
                    return (
                        $io1(input) ||
                        $io20(input) ||
                        $io21(input) ||
                        $io22(input) ||
                        $io24(input) ||
                        $io25(input) ||
                        $io32(input)
                    );
                })();
            const $iu3 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $io23(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $io26(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $io27(input);
                    if (undefined !== input.oneOf) return $io28(input);
                    if (undefined !== input.$ref) return $io29(input);
                    if (undefined !== input.$recursiveRef) return $io30(input);
                    if ("null" === input.type) return $io31(input);
                    return (
                        $io1(input) ||
                        $io20(input) ||
                        $io21(input) ||
                        $io22(input) ||
                        $io24(input) ||
                        $io25(input) ||
                        $io32(input)
                    );
                })();
            const $co0 = (input: any): any => ({
                schemas: Array.isArray(input.schemas)
                    ? input.schemas.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu3(elem)
                              : (elem as any),
                      )
                    : (input.schemas as any),
                components:
                    "object" === typeof input.components &&
                    null !== input.components
                        ? $co33(input.components)
                        : (input.components as any),
                purpose: input.purpose as any,
                prefix: input.prefix as any,
            });
            const $co1 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? input["enum"].map((elem: any) => elem as any)
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co2 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co3 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co4 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co5 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co6 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co7 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co8 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co9 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co10 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co11 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co12 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co13 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co14 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co15 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co16 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co17 = (input: any): any => ({
                kind: input.kind as any,
                value: input.value as any,
            });
            const $co18 = (input: any): any => ({
                name: input.name as any,
                text: Array.isArray(input.text)
                    ? input.text.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co19(elem)
                              : (elem as any),
                      )
                    : (input.text as any),
            });
            const $co19 = (input: any): any => ({
                text: input.text as any,
                kind: input.kind as any,
            });
            const $co20 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? input["enum"].map((elem: any) => elem as any)
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co21 = (input: any): any => ({
                enum: Array.isArray(input["enum"])
                    ? input["enum"].map((elem: any) => elem as any)
                    : (input["enum"] as any),
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co22 = (input: any): any => ({
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co23 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co24 = (input: any): any => ({
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                exclusiveMinimum: input.exclusiveMinimum as any,
                exclusiveMaximum: input.exclusiveMaximum as any,
                multipleOf: input.multipleOf as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co25 = (input: any): any => ({
                minLength: input.minLength as any,
                maxLength: input.maxLength as any,
                pattern: input.pattern as any,
                format: input.format as any,
                default: input["default"] as any,
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co26 = (input: any): any => ({
                items:
                    "object" === typeof input.items && null !== input.items
                        ? $cu3(input.items)
                        : (input.items as any),
                minItems: input.minItems as any,
                maxItems: input.maxItems as any,
                "x-typia-tuple":
                    "object" === typeof input["x-typia-tuple"] &&
                    null !== input["x-typia-tuple"]
                        ? $co27(input["x-typia-tuple"])
                        : (input["x-typia-tuple"] as any),
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co27 = (input: any): any => ({
                items: Array.isArray(input.items)
                    ? input.items.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu2(elem)
                              : (elem as any),
                      )
                    : (input.items as any),
                type: input.type as any,
                nullable: input.nullable as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co28 = (input: any): any => ({
                oneOf: Array.isArray(input.oneOf)
                    ? input.oneOf.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu1(elem)
                              : (elem as any),
                      )
                    : (input.oneOf as any),
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co29 = (input: any): any => ({
                $ref: input.$ref as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co30 = (input: any): any => ({
                $recursiveRef: input.$recursiveRef as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co31 = (input: any): any => ({
                type: input.type as any,
                deprecated: input.deprecated as any,
                title: input.title as any,
                description: input.description as any,
                "x-typia-metaTags": Array.isArray(input["x-typia-metaTags"])
                    ? input["x-typia-metaTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-metaTags"] as any),
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-required": input["x-typia-required"] as any,
                "x-typia-rest": input["x-typia-rest"] as any,
            });
            const $co32 = (input: any): any => {};
            const $co33 = (input: any): any => ({
                schemas:
                    "object" === typeof input.schemas && null !== input.schemas
                        ? $co34(input.schemas)
                        : (input.schemas as any),
            });
            const $co34 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $co35(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $co35 = (input: any): any => ({
                $id: input.$id as any,
                $recursiveAnchor: input.$recursiveAnchor as any,
                type: input.type as any,
                nullable: input.nullable as any,
                properties:
                    "object" === typeof input.properties &&
                    null !== input.properties
                        ? $co36(input.properties)
                        : (input.properties as any),
                patternProperties:
                    "object" === typeof input.patternProperties &&
                    null !== input.patternProperties
                        ? $co36(input.patternProperties)
                        : (input.patternProperties as any),
                additionalProperties:
                    "object" === typeof input.additionalProperties &&
                    null !== input.additionalProperties
                        ? $cu3(input.additionalProperties)
                        : (input.additionalProperties as any),
                required: Array.isArray(input.required)
                    ? input.required.map((elem: any) => elem as any)
                    : (input.required as any),
                description: input.description as any,
                "x-typia-jsDocTags": Array.isArray(input["x-typia-jsDocTags"])
                    ? input["x-typia-jsDocTags"].map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co18(elem)
                              : (elem as any),
                      )
                    : (input["x-typia-jsDocTags"] as any),
                "x-typia-patternProperties":
                    "object" === typeof input["x-typia-patternProperties"] &&
                    null !== input["x-typia-patternProperties"]
                        ? $co36(input["x-typia-patternProperties"])
                        : (input["x-typia-patternProperties"] as any),
                "x-typia-additionalProperties":
                    "object" === typeof input["x-typia-additionalProperties"] &&
                    null !== input["x-typia-additionalProperties"]
                        ? $cu3(input["x-typia-additionalProperties"])
                        : (input["x-typia-additionalProperties"] as any),
            });
            const $co36 = (input: any): any => {
                const output = {} as any;
                for (const [key, value] of Object.entries(input)) {
                    if (RegExp(/(.*)/).test(key)) {
                        output[key] =
                            "object" === typeof value && null !== value
                                ? $cu3(value)
                                : (value as any);
                        continue;
                    }
                }
                return output;
            };
            const $cu0 = (input: any): any =>
                (() => {
                    if ("items" === input.kind) return $co2(input);
                    if ("minItems" === input.kind) return $co3(input);
                    if ("maxItems" === input.kind) return $co4(input);
                    if ("format" === input.kind) return $co5(input);
                    if ("pattern" === input.kind) return $co6(input);
                    if ("length" === input.kind) return $co7(input);
                    if ("minLength" === input.kind) return $co8(input);
                    if ("maxLength" === input.kind) return $co9(input);
                    if ("minimum" === input.kind) return $co12(input);
                    if ("maximum" === input.kind) return $co13(input);
                    if ("exclusiveMinimum" === input.kind) return $co14(input);
                    if ("exclusiveMaximum" === input.kind) return $co15(input);
                    if ("multipleOf" === input.kind) return $co16(input);
                    if ("step" === input.kind) return $co17(input);
                    return (() => {
                        if ($io10(input)) return $co10(input);
                        if ($io11(input)) return $co11(input);
                        $throws({
                            expected:
                                "(IMetadataTag.INumberType | IMetadataTag.IBigintType)",
                            value: input,
                        });
                    })();
                })();
            const $cu1 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $co23(input);
                    if (undefined !== input.oneOf) return $co28(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $co27(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $co26(input);
                    if (undefined !== input.$ref) return $co29(input);
                    if (undefined !== input.$recursiveRef) return $co30(input);
                    if ("null" === input.type) return $co31(input);
                    return (() => {
                        if ($io1(input)) return $co1(input);
                        if ($io20(input)) return $co20(input);
                        if ($io21(input)) return $co21(input);
                        if ($io22(input)) return $co22(input);
                        if ($io24(input)) return $co24(input);
                        if ($io25(input)) return $co25(input);
                        if ($io32(input)) return $co32(input);
                        $throws({
                            expected:
                                '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                            value: input,
                        });
                    })();
                })();
            const $cu2 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $co23(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $co27(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $co26(input);
                    if (undefined !== input.oneOf) return $co28(input);
                    if (undefined !== input.$ref) return $co29(input);
                    if (undefined !== input.$recursiveRef) return $co30(input);
                    if ("null" === input.type) return $co31(input);
                    return (() => {
                        if ($io1(input)) return $co1(input);
                        if ($io20(input)) return $co20(input);
                        if ($io21(input)) return $co21(input);
                        if ($io22(input)) return $co22(input);
                        if ($io24(input)) return $co24(input);
                        if ($io25(input)) return $co25(input);
                        if ($io32(input)) return $co32(input);
                        $throws({
                            expected:
                                '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                            value: input,
                        });
                    })();
                })();
            const $cu3 = (input: any): any =>
                (() => {
                    if ("integer" === input.type) return $co23(input);
                    if (
                        "object" === typeof input.items &&
                        null !== input.items &&
                        false === Array.isArray(input.items) &&
                        $iu3(input.items)
                    )
                        return $co26(input);
                    if (
                        Array.isArray(input.items) &&
                        input.items.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem) &&
                                $iu2(elem),
                        )
                    )
                        return $co27(input);
                    if (undefined !== input.oneOf) return $co28(input);
                    if (undefined !== input.$ref) return $co29(input);
                    if (undefined !== input.$recursiveRef) return $co30(input);
                    if ("null" === input.type) return $co31(input);
                    return (() => {
                        if ($io1(input)) return $co1(input);
                        if ($io20(input)) return $co20(input);
                        if ($io21(input)) return $co21(input);
                        if ($io22(input)) return $co22(input);
                        if ($io24(input)) return $co24(input);
                        if ($io25(input)) return $co25(input);
                        if ($io32(input)) return $co32(input);
                        $throws({
                            expected:
                                '(IJsonSchema.IEnumeration<"boolean"> | IJsonSchema.IEnumeration<"number"> | IJsonSchema.IEnumeration<"string"> | IJsonSchema.IBoolean | IJsonSchema.INumber | IJsonSchema.IString | IJsonSchema.IUnknown)',
                            value: input,
                        });
                    })();
                })();
            return Array.isArray(input)
                ? input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co0(elem)
                          : (elem as any),
                  )
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    UltimateUnion.SPOILERS,
);
