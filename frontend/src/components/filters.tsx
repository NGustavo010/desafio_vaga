import { Button, Stack } from "@chakra-ui/react"
import { FilterField } from "./filter-field"
import { UseFormRegister, UseFormReset } from "react-hook-form"
import { SearchTransactionsFormData } from "./search-transactions"
import { BiRefresh } from "react-icons/bi"

type FiltersProps = {
    register: UseFormRegister<SearchTransactionsFormData>;
    reset: UseFormReset<SearchTransactionsFormData>;
}

export const Filters = ({ register, reset }: FiltersProps) => {
    return (
        <>
            <Stack spacing={5} marginTop="40px" marginBottom="60px">
                <Stack direction="row" justifyContent="center">
                    <FilterField register={register} registerData="transactionId" name="ID" placeholder="Insira um ID" type="text" />
                    <FilterField register={register} registerData="name" name="Nome" placeholder="Insira um nome" type="text" />
                    <FilterField register={register} registerData="cpfCnpj" name="CPF/CNPJ" placeholder="Insira um CPF/CNPJ" type="text" />
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems={"end"}>
                    <FilterField register={register} registerData="startDate" name="Data inicial" type="date" />
                    <FilterField register={register} registerData="endDate" name="Data final" type="date" />
                    <Button color="secondaryBlue" backgroundColor="primaryBlue"
                    transition={"all 0.3s ease-in-out"}
                    _hover={{ backgroundColor: "primaryBlueHover", color: "secondaryBlueHover" }}
                    fontSize="24px"
                    onClick={() => reset()}
                    >
                        <BiRefresh />
                    </Button>
                </Stack>
            </Stack>
            
        </>
    )
}