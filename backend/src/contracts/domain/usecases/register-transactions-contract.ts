import { Transaction } from "@/domain/entities/transaction";

export interface RegisterTransactionsContract {
	execute(transactions: Transaction[]): Promise<void>;
}