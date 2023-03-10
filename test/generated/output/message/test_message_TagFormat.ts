import typia from "../../../../src";
import { _test_message } from "../../../internal/_test_message";
import { TagFormat } from "../../../structures/TagFormat";

export const test_message_TagFormat = _test_message(
    "TagFormat",
    'syntax = "proto3";\n\nmessage TagFormat {\n    string uuid = 1;\n    string email = 2;\n    string url = 3;\n    string ipv4 = 4;\n    string ipv6 = 5;\n    string custom = 6;\n}',
);
