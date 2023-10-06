import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { MapUnion } from "../../structures/MapUnion";

export const test_misc_createAssertClone_MapUnion = _test_misc_assertClone(
    "MapUnion",
)<MapUnion>(MapUnion)(typia.misc.createAssertClone<MapUnion>());
