import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_random_TemplateConstant = _test_random(
    "TemplateConstant",
)<TemplateConstant>(TemplateConstant)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<TemplateConstant> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator?.array ?? $generator.array)(() =>
                    $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                prefix: $pick([
                    () => "prefix_A",
                    () => "prefix_B",
                    () => "prefix_C",
                ])(),
                postfix: $pick([
                    () => "3_postfix",
                    () => "2_postfix",
                    () => "1_postfix",
                ])(),
                combined: $pick([
                    () => "the_3_value_with_label_A",
                    () => "the_3_value_with_label_B",
                    () => "the_3_value_with_label_C",
                    () => "the_2_value_with_label_A",
                    () => "the_2_value_with_label_B",
                    () => "the_2_value_with_label_C",
                    () => "the_1_value_with_label_A",
                    () => "the_1_value_with_label_B",
                    () => "the_1_value_with_label_C",
                ])(),
            });
            return $ro0();
        })(),
    assert: (input: any): TemplateConstant => {
        const __is = (input: any): input is TemplateConstant => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                ("prefix_A" === input.prefix ||
                    "prefix_B" === input.prefix ||
                    "prefix_C" === input.prefix) &&
                ("3_postfix" === input.postfix ||
                    "2_postfix" === input.postfix ||
                    "1_postfix" === input.postfix) &&
                ("the_3_value_with_label_A" === input.combined ||
                    "the_3_value_with_label_B" === input.combined ||
                    "the_3_value_with_label_C" === input.combined ||
                    "the_2_value_with_label_A" === input.combined ||
                    "the_2_value_with_label_B" === input.combined ||
                    "the_2_value_with_label_C" === input.combined ||
                    "the_1_value_with_label_A" === input.combined ||
                    "the_1_value_with_label_B" === input.combined ||
                    "the_1_value_with_label_C" === input.combined);
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TemplateConstant => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TemplateConstant.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TemplateConstant.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TemplateConstant.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TemplateConstant.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("prefix_A" === input.prefix ||
                        "prefix_B" === input.prefix ||
                        "prefix_C" === input.prefix ||
                        $guard(_exceptionable, {
                            path: _path + ".prefix",
                            expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                            value: input.prefix,
                        })) &&
                    ("3_postfix" === input.postfix ||
                        "2_postfix" === input.postfix ||
                        "1_postfix" === input.postfix ||
                        $guard(_exceptionable, {
                            path: _path + ".postfix",
                            expected:
                                '("1_postfix" | "2_postfix" | "3_postfix")',
                            value: input.postfix,
                        })) &&
                    ("the_3_value_with_label_A" === input.combined ||
                        "the_3_value_with_label_B" === input.combined ||
                        "the_3_value_with_label_C" === input.combined ||
                        "the_2_value_with_label_A" === input.combined ||
                        "the_2_value_with_label_B" === input.combined ||
                        "the_2_value_with_label_C" === input.combined ||
                        "the_1_value_with_label_A" === input.combined ||
                        "the_1_value_with_label_B" === input.combined ||
                        "the_1_value_with_label_C" === input.combined ||
                        $guard(_exceptionable, {
                            path: _path + ".combined",
                            expected:
                                '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                            value: input.combined,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TemplateConstant",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TemplateConstant",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
