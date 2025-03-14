import typia from "../../../../src";
import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_isQuery_ObjectHttpAtomic = _test_http_isQuery(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
    ((
        input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpAtomic> | null => {
        const is = (input: any): input is ObjectHttpAtomic => {
            return (
                "object" === typeof input &&
                null !== input &&
                "boolean" === typeof (input as any).boolean &&
                "bigint" === typeof (input as any).bigint &&
                "number" === typeof (input as any).number &&
                Number.isFinite((input as any).number) &&
                "string" === typeof (input as any).string
            );
        };
        const query = (
            input: string | URLSearchParams,
        ): typia.Resolved<ObjectHttpAtomic> => {
            const $params = (typia.http.isQuery as any).params;
            const $boolean = (typia.http.isQuery as any).boolean;
            const $bigint = (typia.http.isQuery as any).bigint;
            const $number = (typia.http.isQuery as any).number;
            const $string = (typia.http.isQuery as any).string;
            input = $params(input) as URLSearchParams;
            const output = {
                boolean: $boolean(input.get("boolean")),
                bigint: $bigint(input.get("bigint")),
                number: $number(input.get("number")),
                string: $string(input.get("string")),
            };
            return output as any;
        };
        const output = query(input);
        if (!is(output)) return null;
        return output;
    })(input),
);
