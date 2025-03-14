import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_json_createAssertParse_ObjectUnionImplicit =
    _test_json_assertParse("ObjectUnionImplicit")<ObjectUnionImplicit>(
        ObjectUnionImplicit,
    )((input: string): typia.Primitive<ObjectUnionImplicit> => {
        const assert = (input: any): ObjectUnionImplicit => {
            const __is = (input: any): input is ObjectUnionImplicit => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y) &&
                    (null === input.slope ||
                        undefined === input.slope ||
                        ("number" === typeof input.slope &&
                            Number.isFinite(input.slope)));
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    (null === input.width ||
                        undefined === input.width ||
                        ("number" === typeof input.width &&
                            Number.isFinite(input.width))) &&
                    (null === input.distance ||
                        undefined === input.distance ||
                        ("number" === typeof input.distance &&
                            Number.isFinite(input.distance)));
                const $io2 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3) &&
                    (null === input.width ||
                        undefined === input.width ||
                        ("number" === typeof input.width &&
                            Number.isFinite(input.width))) &&
                    (null === input.height ||
                        undefined === input.height ||
                        ("number" === typeof input.height &&
                            Number.isFinite(input.height))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        ("number" === typeof input.area &&
                            Number.isFinite(input.area)));
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io0(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io0(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io0(input.p3) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    $io0(input.p4) &&
                    (null === input.width ||
                        undefined === input.width ||
                        ("number" === typeof input.width &&
                            Number.isFinite(input.width))) &&
                    (null === input.height ||
                        undefined === input.height ||
                        ("number" === typeof input.height &&
                            Number.isFinite(input.height))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        ("number" === typeof input.area &&
                            Number.isFinite(input.area)));
                const $io4 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    (null === input.length ||
                        undefined === input.length ||
                        ("number" === typeof input.length &&
                            Number.isFinite(input.length)));
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io4(input.outer) &&
                    (undefined === input.inner ||
                        (Array.isArray(input.inner) &&
                            input.inner.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            ))) &&
                    (null === input.area ||
                        undefined === input.area ||
                        ("number" === typeof input.area &&
                            Number.isFinite(input.area)));
                const $io6 = (input: any): boolean =>
                    (undefined === input.centroid ||
                        ("object" === typeof input.centroid &&
                            null !== input.centroid &&
                            $io0(input.centroid))) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius) &&
                    (null === input.area ||
                        undefined === input.area ||
                        ("number" === typeof input.area &&
                            Number.isFinite(input.area)));
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.x) return $io0(input);
                        else if (undefined !== input.p4) return $io3(input);
                        else if (undefined !== input.points) return $io4(input);
                        else if (undefined !== input.outer) return $io5(input);
                        else if (undefined !== input.radius) return $io6(input);
                        else
                            return (() => {
                                if (undefined !== input.p3) return $io2(input);
                                else return $io1(input);
                            })();
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionImplicit => {
                    const $guard = (typia.json.createAssertParse as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.x &&
                            Number.isFinite(input.x)) ||
                            $guard(_exceptionable, {
                                path: _path + ".x",
                                expected: "number",
                                value: input.x,
                            })) &&
                        (("number" === typeof input.y &&
                            Number.isFinite(input.y)) ||
                            $guard(_exceptionable, {
                                path: _path + ".y",
                                expected: "number",
                                value: input.y,
                            })) &&
                        (null === input.slope ||
                            undefined === input.slope ||
                            ("number" === typeof input.slope &&
                                Number.isFinite(input.slope)) ||
                            $guard(_exceptionable, {
                                path: _path + ".slope",
                                expected: "(null | number | undefined)",
                                value: input.slope,
                            }));
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.p1 &&
                            null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p1,
                            })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p1,
                            })) &&
                        (((("object" === typeof input.p2 &&
                            null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p2,
                            })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p2,
                            })) &&
                        (null === input.width ||
                            undefined === input.width ||
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width)) ||
                            $guard(_exceptionable, {
                                path: _path + ".width",
                                expected: "(null | number | undefined)",
                                value: input.width,
                            })) &&
                        (null === input.distance ||
                            undefined === input.distance ||
                            ("number" === typeof input.distance &&
                                Number.isFinite(input.distance)) ||
                            $guard(_exceptionable, {
                                path: _path + ".distance",
                                expected: "(null | number | undefined)",
                                value: input.distance,
                            }));
                    const $ao2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.p1 &&
                            null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p1,
                            })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p1,
                            })) &&
                        (((("object" === typeof input.p2 &&
                            null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p2,
                            })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p2,
                            })) &&
                        (((("object" === typeof input.p3 &&
                            null !== input.p3) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p3,
                            })) &&
                            $ao0(
                                input.p3,
                                _path + ".p3",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p3,
                            })) &&
                        (null === input.width ||
                            undefined === input.width ||
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width)) ||
                            $guard(_exceptionable, {
                                path: _path + ".width",
                                expected: "(null | number | undefined)",
                                value: input.width,
                            })) &&
                        (null === input.height ||
                            undefined === input.height ||
                            ("number" === typeof input.height &&
                                Number.isFinite(input.height)) ||
                            $guard(_exceptionable, {
                                path: _path + ".height",
                                expected: "(null | number | undefined)",
                                value: input.height,
                            })) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)) ||
                            $guard(_exceptionable, {
                                path: _path + ".area",
                                expected: "(null | number | undefined)",
                                value: input.area,
                            }));
                    const $ao3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.p1 &&
                            null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p1,
                            })) &&
                            $ao0(
                                input.p1,
                                _path + ".p1",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p1,
                            })) &&
                        (((("object" === typeof input.p2 &&
                            null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p2,
                            })) &&
                            $ao0(
                                input.p2,
                                _path + ".p2",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p2,
                            })) &&
                        (((("object" === typeof input.p3 &&
                            null !== input.p3) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p3,
                            })) &&
                            $ao0(
                                input.p3,
                                _path + ".p3",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p3,
                            })) &&
                        (((("object" === typeof input.p4 &&
                            null !== input.p4) ||
                            $guard(_exceptionable, {
                                path: _path + ".p4",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p4,
                            })) &&
                            $ao0(
                                input.p4,
                                _path + ".p4",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".p4",
                                expected: "ObjectUnionImplicit.IPoint",
                                value: input.p4,
                            })) &&
                        (null === input.width ||
                            undefined === input.width ||
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width)) ||
                            $guard(_exceptionable, {
                                path: _path + ".width",
                                expected: "(null | number | undefined)",
                                value: input.width,
                            })) &&
                        (null === input.height ||
                            undefined === input.height ||
                            ("number" === typeof input.height &&
                                Number.isFinite(input.height)) ||
                            $guard(_exceptionable, {
                                path: _path + ".height",
                                expected: "(null | number | undefined)",
                                value: input.height,
                            })) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)) ||
                            $guard(_exceptionable, {
                                path: _path + ".area",
                                expected: "(null | number | undefined)",
                                value: input.area,
                            }));
                    const $ao4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((Array.isArray(input.points) ||
                            $guard(_exceptionable, {
                                path: _path + ".points",
                                expected: "Array<ObjectUnionImplicit.IPoint>",
                                value: input.points,
                            })) &&
                            input.points.every(
                                (elem: any, _index2: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".points[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "ObjectUnionImplicit.IPoint",
                                            value: elem,
                                        })) &&
                                        $ao0(
                                            elem,
                                            _path + ".points[" + _index2 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index2 + "]",
                                        expected: "ObjectUnionImplicit.IPoint",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".points",
                                expected: "Array<ObjectUnionImplicit.IPoint>",
                                value: input.points,
                            })) &&
                        (null === input.length ||
                            undefined === input.length ||
                            ("number" === typeof input.length &&
                                Number.isFinite(input.length)) ||
                            $guard(_exceptionable, {
                                path: _path + ".length",
                                expected: "(null | number | undefined)",
                                value: input.length,
                            }));
                    const $ao5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((("object" === typeof input.outer &&
                            null !== input.outer) ||
                            $guard(_exceptionable, {
                                path: _path + ".outer",
                                expected: "ObjectUnionImplicit.IPolyline",
                                value: input.outer,
                            })) &&
                            $ao4(
                                input.outer,
                                _path + ".outer",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".outer",
                                expected: "ObjectUnionImplicit.IPolyline",
                                value: input.outer,
                            })) &&
                        (undefined === input.inner ||
                            ((Array.isArray(input.inner) ||
                                $guard(_exceptionable, {
                                    path: _path + ".inner",
                                    expected:
                                        "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                                    value: input.inner,
                                })) &&
                                input.inner.every(
                                    (elem: any, _index3: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".inner[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "ObjectUnionImplicit.IPolyline",
                                                value: elem,
                                            })) &&
                                            $ao4(
                                                elem,
                                                _path +
                                                    ".inner[" +
                                                    _index3 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".inner[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "ObjectUnionImplicit.IPolyline",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".inner",
                                expected:
                                    "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                                value: input.inner,
                            })) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)) ||
                            $guard(_exceptionable, {
                                path: _path + ".area",
                                expected: "(null | number | undefined)",
                                value: input.area,
                            }));
                    const $ao6 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (undefined === input.centroid ||
                            ((("object" === typeof input.centroid &&
                                null !== input.centroid) ||
                                $guard(_exceptionable, {
                                    path: _path + ".centroid",
                                    expected:
                                        "(ObjectUnionImplicit.IPoint | undefined)",
                                    value: input.centroid,
                                })) &&
                                $ao0(
                                    input.centroid,
                                    _path + ".centroid",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".centroid",
                                expected:
                                    "(ObjectUnionImplicit.IPoint | undefined)",
                                value: input.centroid,
                            })) &&
                        (("number" === typeof input.radius &&
                            Number.isFinite(input.radius)) ||
                            $guard(_exceptionable, {
                                path: _path + ".radius",
                                expected: "number",
                                value: input.radius,
                            })) &&
                        (null === input.area ||
                            undefined === input.area ||
                            ("number" === typeof input.area &&
                                Number.isFinite(input.area)) ||
                            $guard(_exceptionable, {
                                path: _path + ".area",
                                expected: "(null | number | undefined)",
                                value: input.area,
                            }));
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if (undefined !== input.x)
                                return $ao0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.p4)
                                return $ao3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.points)
                                return $ao4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.outer)
                                return $ao5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.radius)
                                return $ao6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else
                                return (() => {
                                    if (undefined !== input.p3)
                                        return $ao2(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                    else
                                        return $ao1(
                                            input,
                                            _path,
                                            true && _exceptionable,
                                        );
                                })();
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectUnionImplicit",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectUnionImplicit",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input) as any;
    });
