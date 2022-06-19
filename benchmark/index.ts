import { BenchmarkGenerator } from "./internal/Benchmark";

import { benchmark_stringify_repeat } from "./features/benchmark_stringify_repeat";

function measure(functor: () => Array<() => BenchmarkGenerator.IOutput>): void {
    console.log(`## ${functor.name}`);
    console.log(
        [
            "Component",
            "ideal",
            "typescript-json",
            "fast-json-stringify",
            "JSON.stringify",
        ].join(" | "),
    );
    console.log(new Array(4).fill("------------").join("|"));
    for (const comp of functor()) {
        const result = comp();
        console.log(
            [
                result.name,
                (result.ideal / result.json) * 100,
                (result.tson / result.json) * 100,
                (result.ajv / result.json) * 100,
                (result.json / result.json) * 100,
            ].join(" | "),
        );
    }
    console.log("\n\n");
}

function main(): void {
    // measure(benchmark_stringify_optimizer);
    measure(benchmark_stringify_repeat);
}
main();
