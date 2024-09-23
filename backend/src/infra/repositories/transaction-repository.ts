import { GetTransactionRepository, GetTransactionRepositoryResponse } from "@/contracts/infra/repositories/transaction/get-transaction-repository";
import { AddTransactionRepository, AddTransactionRepositoryParams } from "@/contracts/infra/repositories/transaction/add-transaction-repository"
import { Transaction } from "@/main/config/mongodb";
import { GetFilteredTransactionsRepository, GetFilteredTransactionsRepositoryParams, GetFilteredTransactionsRepositoryResponse } from "@/contracts/infra/repositories/transaction/get-filtered-transactions-repository";

export class TransactionRepository implements GetTransactionRepository, AddTransactionRepository, GetFilteredTransactionsRepository {
    async get(id: string): Promise<GetTransactionRepositoryResponse> {
        const transactionFounded = await Transaction.findOne({ id });
        if(!transactionFounded) {
            return null;
        }
        return transactionFounded as GetTransactionRepositoryResponse;
    }
    
    async add(addTransactionRepositoryParams: AddTransactionRepositoryParams): Promise<void> {
        try{
            await Transaction.create(addTransactionRepositoryParams);
        } catch (error) {
            if(error instanceof Error && error.message.startsWith("E11000")) {
                console.log(`Transaction ${addTransactionRepositoryParams.id} already exists`);
                return;
            }
            console.log(`Unexpected error: ${error} in Transaction: ${addTransactionRepositoryParams.id}`);
        }
        return;
    }

    async getFiltered(getFilteredTransactionsRepositoryParams: GetFilteredTransactionsRepositoryParams): Promise<GetFilteredTransactionsRepositoryResponse> {
        const {
            page = 1, 
            pageSize = 10, 
            transactionId,
            name,
            cpfCnpj,
            startDate,
            endDate,
        } = getFilteredTransactionsRepositoryParams;
        
        const filter: any = {};
        if (transactionId) {
            filter.id = transactionId;
        }
        if (name) {
            filter.nome = { $regex: name, $options: 'i' }; 
        }
        if (cpfCnpj) {
            filter.cpfCnpj = cpfCnpj;
        }
        if (startDate || endDate) {
            filter.data = {};
            if (startDate) {
              filter.data.$gte = startDate;
            }
            if (endDate) {
              filter.data.$lte = endDate;
            }
        }
        const skip = (page - 1) * pageSize;
        const transactions = await Transaction.find(filter).skip(skip).limit(pageSize) as GetFilteredTransactionsRepositoryResponse;
        return transactions;
    }
}