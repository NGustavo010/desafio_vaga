import { GetTransactionsContract } from '@/contracts/domain/usecases/get-transactions-contract';
import { GetTransactions } from '@/domain/usecases/get-transactions';
import { TransactionRepository } from '@/infra/repositories/transaction-repository';

export const makeGetTransactions = (): GetTransactionsContract => {
	const getFilteredTransactionsRepository = new TransactionRepository();
	return new GetTransactions(getFilteredTransactionsRepository);
};
