import { RegisterTransactionsContract } from "@/contracts/domain/usecases/register-transactions-contract";
import { Customer, Transaction } from "@/domain/entities/transaction";
import { GetCustomerRepository } from "@/contracts/infra/repositories/customer/get-customer-repository";
import { AddCustomerRepository } from "@/contracts/infra/repositories/customer/add-customer-repository";
import { GetTransactionRepository } from "@/contracts/infra/repositories/transaction/get-transaction-repository";
import { AddTransactionRepository } from "@/contracts/infra/repositories/transaction/add-transaction-repository";

export class RegisterTransactions implements RegisterTransactionsContract {
    constructor(
        private readonly getCustomerRepository: GetCustomerRepository,
        private readonly addCustomerRepository: AddCustomerRepository,
        private readonly getTransactionRepository: GetTransactionRepository,
        private readonly addTransactionRepository: AddTransactionRepository
    ) {
    }

    async addCustomer(customer: Customer) {
        const { cpfCnpj } = customer;
        const customerFounded = await this.getCustomerRepository.get(cpfCnpj);
        if(!customerFounded) {
            await this.addCustomerRepository.add(customer);
        }
    }

    async addTransaction(transaction: Transaction) {
        const { id } = transaction;
        const transactionFounded = await this.getTransactionRepository.get(id);
        if(!transactionFounded) {
            await this.addTransactionRepository.add(transaction);
        }
    }

    async handleTransaction(transaction: Transaction) {
        await Promise.all([
            this.addCustomer(transaction),
            this.addTransaction(transaction)
        ]);
    }

    async execute(transactions: Transaction[]): Promise<void> {
        const transactionsPromises: Promise<void>[] = [];
        transactions.forEach(transaction => {
            transactionsPromises.push(this.handleTransaction(transaction));
        });
        await Promise.all(transactionsPromises);
    }
}