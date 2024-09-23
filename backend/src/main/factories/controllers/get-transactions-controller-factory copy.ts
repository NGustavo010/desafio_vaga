import { GetTransactionsController } from "@/application/controllers/get-transactions-controller";
import { Controller } from "@/contracts/application/controllers/controller";
import { makeGetTransactions } from "@/main/factories/usecases/get-transactions-factory";


export const makeGetTransactionsController = (): Controller => {
	const controller = new GetTransactionsController(makeGetTransactions());
	return controller;
};
