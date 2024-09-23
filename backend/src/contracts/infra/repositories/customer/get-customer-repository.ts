import { Customer } from "@/domain/entities/transaction"

export type GetCustomerRepositoryResponse = Customer | null

export interface GetCustomerRepository {
    get: (cpfCnpj: string) => Promise<GetCustomerRepositoryResponse>
  }