import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createRandom_AtomicAlias = _test_random(
    "AtomicAlias",
)<AtomicAlias>(AtomicAlias)({
    random: typia.createRandom<AtomicAlias>(),
    assert: typia.createAssert<AtomicAlias>(),
});
