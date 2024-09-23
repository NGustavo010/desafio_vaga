import { Customer } from "@/domain/entities/transaction"

export type AddCustomerRepositoryParams = Customer;

export interface AddCustomerRepository {
  add: (addCustomerRepositoryParams: AddCustomerRepositoryParams) => Promise<void>
}
