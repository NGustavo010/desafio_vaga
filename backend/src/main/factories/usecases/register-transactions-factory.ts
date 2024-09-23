import { RegisterTransactionsContract } from '@/contracts/domain/usecases/register-transactions-contract';
import { RegisterTransactions } from '@/domain/usecases/register-transactions';
import { CustomerRepository } from '@/infra/repositories/customer-repository';
import { TransactionRepository } from '@/infra/repositories/transaction-repository';

export const makeRegisterTransactions = (): RegisterTransactionsContract => {
	const getCustomerRepository = new CustomerRepository();
	const addCustomerRepository = new CustomerRepository();
	const getTransactionRepository = new TransactionRepository();
	const addTransactionRepository = new TransactionRepository();
	return new RegisterTransactions(getCustomerRepository, addCustomerRepository, getTransactionRepository, addTransactionRepository);
};
