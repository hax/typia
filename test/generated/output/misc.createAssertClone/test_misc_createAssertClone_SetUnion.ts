import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { SetUnion } from "../../../structures/SetUnion";

export const test_misc_createAssertClone_SetUnion = _test_misc_assertClone(
    "SetUnion",
)<SetUnion>(SetUnion)((input: any): typia.Resolved<SetUnion> => {
    const assert = (input: any): SetUnion => {
        const __is = (input: any): input is SetUnion => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        elem instanceof Set &&
                        (() => {
                            const array = [...elem];
                            const top = elem.values().next().value;
                            if (0 === elem.size) return true;
                            const arrayPredicators = [
                                [
                                    (top: any[]): any =>
                                        "boolean" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "boolean" === typeof elem,
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "number" === typeof top &&
                                        Number.isFinite(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "string" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "string" === typeof elem,
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        Array.isArray(top) &&
                                        top.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                Array.isArray(elem) &&
                                                elem.every(
                                                    (elem: any) =>
                                                        "number" ===
                                                            typeof elem &&
                                                        Number.isFinite(elem),
                                                ),
                                        ),
                                ] as const,
                                [
                                    (top: any[]): any =>
                                        "object" === typeof top &&
                                        null !== top &&
                                        $io0(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                $io0(elem),
                                        ),
                                ] as const,
                            ];
                            const passed = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length)
                                return passed[0]![1](array);
                            else if (1 < passed.length)
                                for (const pred of passed)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === pred[0](value),
                                        )
                                    )
                                        return pred[1](array);
                            return false;
                        })(),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is SetUnion => {
                const $guard = (typia.misc.createAssertClone as any).guard;
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
                    (("number" === typeof input.age &&
                        Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "number",
                            value: input.age,
                        }));
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "SetUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((elem instanceof Set ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Set<Array<number>> | Set<SetUnion.Person> | Set<boolean> | Set<number> | Set<string>)",
                                        value: elem,
                                    })) &&
                                    (() => {
                                        const array = [...elem];
                                        const top = elem.values().next().value;
                                        if (0 === elem.size) return true;
                                        const arrayPredicators = [
                                            [
                                                (top: any[]): any =>
                                                    "boolean" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index2: number,
                                                        ) =>
                                                            "boolean" ===
                                                                typeof elem ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "boolean",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                            [
                                                (top: any[]): any =>
                                                    "number" === typeof top &&
                                                    Number.isFinite(top),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index3: number,
                                                        ) =>
                                                            ("number" ===
                                                                typeof elem &&
                                                                Number.isFinite(
                                                                    elem,
                                                                )) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index3 +
                                                                    "]",
                                                                expected:
                                                                    "number",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                            [
                                                (top: any[]): any =>
                                                    "string" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index4: number,
                                                        ) =>
                                                            "string" ===
                                                                typeof elem ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index4 +
                                                                    "]",
                                                                expected:
                                                                    "string",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                            [
                                                (top: any[]): any =>
                                                    Array.isArray(top) &&
                                                    top.every(
                                                        (
                                                            elem: any,
                                                            _index5: number,
                                                        ) =>
                                                            "number" ===
                                                                typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            ),
                                                    ),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index6: number,
                                                        ) =>
                                                            ((Array.isArray(
                                                                elem,
                                                            ) ||
                                                                $guard(true, {
                                                                    path:
                                                                        _path +
                                                                        "[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index6 +
                                                                        "]",
                                                                    expected:
                                                                        "Array<number>",
                                                                    value: elem,
                                                                })) &&
                                                                elem.every(
                                                                    (
                                                                        elem: any,
                                                                        _index7: number,
                                                                    ) =>
                                                                        ("number" ===
                                                                            typeof elem &&
                                                                            Number.isFinite(
                                                                                elem,
                                                                            )) ||
                                                                        $guard(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index6 +
                                                                                    "][" +
                                                                                    _index7 +
                                                                                    "]",
                                                                                expected:
                                                                                    "number",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index6 +
                                                                    "]",
                                                                expected:
                                                                    "Array<number>",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                            [
                                                (top: any[]): any =>
                                                    "object" === typeof top &&
                                                    null !== top &&
                                                    $ao0(top, _path, false),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index8: number,
                                                        ) =>
                                                            ((("object" ===
                                                                typeof elem &&
                                                                null !==
                                                                    elem) ||
                                                                $guard(true, {
                                                                    path:
                                                                        _path +
                                                                        "[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index8 +
                                                                        "]",
                                                                    expected:
                                                                        "SetUnion.Person",
                                                                    value: elem,
                                                                })) &&
                                                                $ao0(
                                                                    elem,
                                                                    _path +
                                                                        "[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index8 +
                                                                        "]",
                                                                    true,
                                                                )) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index8 +
                                                                    "]",
                                                                expected:
                                                                    "SetUnion.Person",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ] as const,
                                        ];
                                        const passed = arrayPredicators.filter(
                                            (pred: any) => pred[0](top),
                                        );
                                        if (1 === passed.length)
                                            return passed[0]![1](array);
                                        else if (1 < passed.length)
                                            for (const pred of passed)
                                                if (
                                                    array.every(
                                                        (value: any) =>
                                                            true ===
                                                            pred[0](value),
                                                    )
                                                )
                                                    return pred[1](array);
                                        return $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<SetUnion.Person>)",
                                            value: elem,
                                        });
                                    })()) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Set<Array<number>> | Set<SetUnion.Person> | Set<boolean> | Set<number> | Set<string>)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "SetUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    const clone = (input: SetUnion): typia.Resolved<SetUnion> => {
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age;
        const $throws = (typia.misc.createAssertClone as any).throws;
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) =>
            input.map((elem: any) =>
                elem instanceof Set
                    ? (() => {
                          const array = [...elem];
                          const top = elem.values().next().value;
                          if (0 === elem.size) return new Set<any>();
                          const arrayPredicators = [
                              [
                                  (top: any[]): any => "boolean" === typeof top,
                                  (entire: any[]): any =>
                                      new Set<any>(
                                          entire.map(
                                              (elem: any) => elem as any,
                                          ),
                                      ),
                              ] as const,
                              [
                                  (top: any[]): any => "number" === typeof top,
                                  (entire: any[]): any =>
                                      new Set<any>(
                                          entire.map(
                                              (elem: any) => elem as any,
                                          ),
                                      ),
                              ] as const,
                              [
                                  (top: any[]): any => "string" === typeof top,
                                  (entire: any[]): any =>
                                      new Set<any>(
                                          entire.map(
                                              (elem: any) => elem as any,
                                          ),
                                      ),
                              ] as const,
                              [
                                  (top: any[]): any =>
                                      Array.isArray(top) &&
                                      top.every(
                                          (elem: any) =>
                                              "number" === typeof elem,
                                      ),
                                  (entire: any[]): any =>
                                      new Set<any>(
                                          entire.map((elem: any) =>
                                              Array.isArray(elem)
                                                  ? $cp0(elem)
                                                  : (elem as any),
                                          ),
                                      ),
                              ] as const,
                              [
                                  (top: any[]): any =>
                                      "object" === typeof top &&
                                      null !== top &&
                                      $io0(top),
                                  (entire: any[]): any =>
                                      new Set<any>(
                                          entire.map((elem: any) =>
                                              "object" === typeof elem &&
                                              null !== elem
                                                  ? $co0(elem)
                                                  : (elem as any),
                                          ),
                                      ),
                              ] as const,
                          ];
                          const passed = arrayPredicators.filter((pred: any) =>
                              pred[0](top),
                          );
                          if (1 === passed.length) return passed[0]![1](array);
                          else if (1 < passed.length)
                              for (const pred of passed)
                                  if (
                                      array.every(
                                          (value: any) =>
                                              true === pred[0](value),
                                      )
                                  )
                                      return pred[1](array);
                          $throws({
                              expected:
                                  "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<SetUnion.Person>)",
                              value: elem,
                          });
                      })()
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            age: input.age as any,
        });
        return Array.isArray(input) ? $cp1(input) : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
});
