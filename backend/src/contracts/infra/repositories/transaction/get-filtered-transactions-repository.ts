import { GetTransactionsParams } from "@/contracts/domain/usecases/get-transactions-contract";
import { Transaction } from "@/domain/entities/transaction"

export type GetFilteredTransactionsRepositoryParams = GetTransactionsParams;
export type GetFilteredTransactionsRepositoryResponse = Transaction[];

export interface GetFilteredTransactionsRepository {
  getFiltered: (getFilteredTransactionsRepositoryParams: GetFilteredTransactionsRepositoryParams) => Promise<GetFilteredTransactionsRepositoryResponse>
}