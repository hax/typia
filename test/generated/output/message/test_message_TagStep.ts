import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagStep } from "../../../structures/TagStep";

export const test_message_TagStep = _test_message(
    "TagStep",
    'syntax = "proto3";\n\nmessage TagStep {\n    message Type {\n        double exclusiveMinimum = 1;\n        double minimum = 2;\n        double range = 3;\n        double multipleOf = 4;\n    }\n}\n\nmessage __Main {\n    repeated TagStep.Type value = 1;\n}',
);
