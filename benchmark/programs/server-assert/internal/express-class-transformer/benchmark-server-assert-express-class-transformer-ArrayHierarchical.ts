import { instanceToPlain, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

import { ArrayHierarchical } from "../../../../../test/structures/ArrayHierarchical";
import { ClassValidatorArrayHierarchical } from "../../../../structures/class-validator/ClassValidatorArrayHierarchical";
import { ClassValidatorCollection } from "../../../../structures/class-validator/ClassValidatorCollection";
import { createExpressServerAssertBenchmarkProgram } from "../createExpressServerAssertBenchmarkProgram";

const schema = ClassValidatorCollection(ClassValidatorArrayHierarchical);
createExpressServerAssertBenchmarkProgram<ArrayHierarchical>((input) => {
    const output = plainToInstance(schema, input);
    const result = validateSync(output);
    if (result.length > 0) throw new Error(result[0].toString());
    return output;
});
