import { Transaction } from "@/domain/entities/transaction"

export type GetTransactionRepositoryResponse = Transaction | null

export interface GetTransactionRepository {
  get: (id: string) => Promise<GetTransactionRepositoryResponse>
}