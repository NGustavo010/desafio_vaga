import { FormLabel, Input, Stack } from "@chakra-ui/react"
import { useForm, UseFormRegister } from "react-hook-form";
import { SearchTransactionsFormData } from "./search-transactions";

type FilterFieldProps = {
    register: UseFormRegister<SearchTransactionsFormData>;
    registerData: "name" | "page" | "pageSize" | "transactionId" | "cpfCnpj" | "startDate" | "endDate";
    name: string;
    type: "text" | "date";
    placeholder?: string;
}

export const FilterField = ({
    register,
    registerData,
    name,
    type,
    placeholder = undefined
}: FilterFieldProps) => {
    return (
        <>
            <Stack>
                <FormLabel color="primaryBlue">{name}</FormLabel>
                <Input
                    type={type}
                    placeholder={placeholder}
                    size="md"
                    w="200px"
                    {
                        ...register(registerData)
                    }
                />
            </Stack>
        </>
    )
}