import { RegisterTransactionsController } from "@/application/controllers/register-transactions-controller";
import { Controller } from "@/contracts/application/controllers/controller";
import { makeRegisterTransactions } from "@/main/factories/usecases/register-transactions-factory";


export const makeRegisterTransactionsController = (): Controller => {
	const controller = new RegisterTransactionsController(makeRegisterTransactions());
	return controller;
};
