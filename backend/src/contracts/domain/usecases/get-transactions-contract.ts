import { Transaction } from "@/domain/entities/transaction";

export type GetTransactionsParams = {
	page?: number;
	pageSize?: number;
	transactionId?: string;
	name?: string;
	cpfCnpj?: string;
	startDate?: Date;
	endDate?: Date;
}

export interface GetTransactionsContract {
	execute(getTransactionsParams: GetTransactionsParams): Promise<Transaction[]>;
}