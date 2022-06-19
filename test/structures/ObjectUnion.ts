import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectUnion = Array<
    | ObjectUnion.IStore
    | ObjectUnion.IBrand
    | ObjectUnion.ICompany
    | ObjectUnion.IDepartment
    | ObjectUnion.IEmployee
>;
export namespace ObjectUnion {
    export interface IStore {
        type: "store";
        name: string;
    }
    export interface IBrand {
        type: "brand";
        name: string;
    }
    export interface ICompany {
        type: "company";
        name: string;
        departments: IDepartment[];
    }
    export interface IDepartment {
        type: "department";
        name: string;
        employees: IEmployee[];
    }
    export interface IEmployee {
        type: "employee";
        name: string;
    }

    export function generate(): ObjectUnion {
        return [
            {
                type: "store",
                name: RandomGenerator.string(),
            },
            {
                type: "brand",
                name: RandomGenerator.string(),
            },
            {
                type: "company",
                name: RandomGenerator.string(),
                departments: RandomGenerator.array(generate_department),
            },
            generate_department(),
            generate_employee(),
        ];
    }
    function generate_department(): IDepartment {
        return {
            type: "department",
            name: RandomGenerator.string(),
            employees: RandomGenerator.array(() => ({
                type: "employee",
                name: RandomGenerator.string(),
            })),
        };
    }
    function generate_employee(): IEmployee {
        return {
            type: "employee",
            name: RandomGenerator.string(),
        };
    }
}
