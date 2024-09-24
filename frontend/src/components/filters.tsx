import { Stack } from "@chakra-ui/react"
import { FilterField } from "./filter-field"
import { UseFormRegister } from "react-hook-form"
import { SearchTransactionsFormData } from "./search-transactions"

type FiltersProps = {
    register: UseFormRegister<SearchTransactionsFormData>
}

export const Filters = ({ register }: FiltersProps) => {
    return (
        <>
            <Stack spacing={5} marginTop="40px" marginBottom="60px">
                <Stack direction="row" justifyContent="center">
                    <FilterField register={register} registerData="transactionId" name="ID" placeholder="Insira um ID" type="text" />
                    <FilterField register={register} registerData="name" name="Nome" placeholder="Insira um nome" type="text" />
                    <FilterField register={register} registerData="cpfCnpj" name="CPF/CNPJ" placeholder="Insira um CPF/CNPJ" type="text" />
                </Stack>
                <Stack direction="row" justifyContent="center">
                    <FilterField register={register} registerData="startDate" name="Data inicial" type="date" />
                    <FilterField register={register} registerData="endDate" name="Data final" type="date" />
                </Stack>
            </Stack>
            
        </>
    )
}