import { TypeOperation } from "./typeOperation.model";

export interface Operation {

    id: number;
    montant:number;
	detail:string;
	dateOperation:Date;
	type:TypeOperation;
}

let Operation = {} as Operation;
