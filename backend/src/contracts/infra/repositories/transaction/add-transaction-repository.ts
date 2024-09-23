import { Transaction } from "@/domain/entities/transaction"

export type AddTransactionRepositoryParams = Transaction;

export interface AddTransactionRepository {
  add: (addTransactionRepositoryParams: AddTransactionRepositoryParams) => Promise<void>
}
