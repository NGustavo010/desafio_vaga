import { GetTransactionsContract, GetTransactionsParams } from "@/contracts/domain/usecases/get-transactions-contract";
import { Transaction } from "@/domain/entities/transaction";
import { GetTransactionRepository } from "@/contracts/infra/repositories/transaction/get-transaction-repository";
import { GetFilteredTransactionsRepository } from "@/contracts/infra/repositories/transaction/get-filtered-transactions-repository";

export class GetTransactions implements GetTransactionsContract {
    constructor(
        private readonly getFilteredTransactionsRepository: GetFilteredTransactionsRepository
    ) {
    }

    async execute(getTransactionsParams: GetTransactionsParams): Promise<Transaction[]> {
        const transactions = await this.getFilteredTransactionsRepository.getFiltered(getTransactionsParams);
        return transactions;
    }
}