import { GetCustomerRepository, GetCustomerRepositoryResponse } from "@/contracts/infra/repositories/customer/get-customer-repository";
import { AddCustomerRepository, AddCustomerRepositoryParams } from "@/contracts/infra/repositories/customer/add-customer-repository";
import { Customer } from "@/main/config/mongodb";

export class CustomerRepository implements GetCustomerRepository, AddCustomerRepository {
    async get(cpfCnpj: string): Promise<GetCustomerRepositoryResponse> {
        const customerFounded = await Customer.findOne({ cpfCnpj });
        if(!customerFounded) {
            return null;
        }
        return customerFounded as GetCustomerRepositoryResponse;
    }
    
    async add(addCustomerRepositoryParams: AddCustomerRepositoryParams): Promise<void> {
        try{
            await Customer.create(addCustomerRepositoryParams);
        } catch (error) {
            if(error instanceof Error && error.message.startsWith("E11000")) {
                console.log(`Customer ${addCustomerRepositoryParams.cpfCnpj} already exists`);
                return;
            }
            console.log(`Unexpected error: ${error} in Customer: ${addCustomerRepositoryParams.cpfCnpj}`);
        }
        return;
    }
}