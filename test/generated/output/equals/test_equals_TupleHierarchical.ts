import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_equals_TupleHierarchical = _test_equals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is [
            boolean,
            null,
            number,
            [boolean, null, [number, [boolean, string]]],
            [
                number,
                Array<
                    [
                        string,
                        boolean,
                        Array<[number, number, [boolean, string]]>,
                    ]
                >,
            ],
        ] => {
            return (
                Array.isArray(input) &&
                input.length === 5 &&
                "boolean" === typeof input[0] &&
                undefined !== input[1] &&
                null === input[1] &&
                "number" === typeof input[2] &&
                Number.isFinite(input[2]) &&
                Array.isArray(input[3]) &&
                input[3].length === 3 &&
                "boolean" === typeof input[3][0] &&
                undefined !== input[3][1] &&
                null === input[3][1] &&
                Array.isArray(input[3][2]) &&
                input[3][2].length === 2 &&
                "number" === typeof input[3][2][0] &&
                Number.isFinite(input[3][2][0]) &&
                Array.isArray(input[3][2][1]) &&
                input[3][2][1].length === 2 &&
                "boolean" === typeof input[3][2][1][0] &&
                "string" === typeof input[3][2][1][1] &&
                Array.isArray(input[4]) &&
                input[4].length === 2 &&
                "number" === typeof input[4][0] &&
                Number.isFinite(input[4][0]) &&
                Array.isArray(input[4][1]) &&
                input[4][1].every(
                    (elem: any, _index1: number) =>
                        Array.isArray(elem) &&
                        elem.length === 3 &&
                        "string" === typeof elem[0] &&
                        "boolean" === typeof elem[1] &&
                        Array.isArray(elem[2]) &&
                        elem[2].every(
                            (elem: any, _index2: number) =>
                                Array.isArray(elem) &&
                                elem.length === 3 &&
                                "number" === typeof elem[0] &&
                                Number.isFinite(elem[0]) &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]) &&
                                Array.isArray(elem[2]) &&
                                elem[2].length === 2 &&
                                "boolean" === typeof elem[2][0] &&
                                "string" === typeof elem[2][1],
                        ),
                )
            );
        })(input),
);
