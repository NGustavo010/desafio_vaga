import { GetTransactionRepository, GetTransactionRepositoryResponse } from "@/contracts/infra/repositories/transaction/get-transaction-repository";
import { AddTransactionRepository, AddTransactionRepositoryParams } from "@/contracts/infra/repositories/transaction/add-transaction-repository"
import { Transaction } from "@/main/config/mongodb";

export class TransactionRepository implements GetTransactionRepository, AddTransactionRepository {
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
}