import { api } from "@/services/api/api";
import { Button, Flex, FormControl, FormLabel, Input, Spinner, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BackButton } from "./back-button";
import { Filters } from "./filters";
import { object } from "framer-motion/client";
import { TransactionsData } from "./transactions-data";

export type SearchTransactionsFormData = {
    page: number;
	pageSize: number;
	transactionId: string;
	name: string;
	cpfCnpj: string;
	startDate: Date;
	endDate: Date;
};

type SearchTransactionsFormDataKeys = "page" | "pageSize" | "transactionId" | "name" | "cpfCnpj" | "startDate" | "endDate";

export default function SearchTransactions() {
    const [transactions, setTransactions] = useState([]);
    const [requestLoading, setRequestLoading] = useState(false);
    const methods = useForm<SearchTransactionsFormData>({
        reValidateMode: 'onChange',
    });
    const {
        handleSubmit,
        reset,
        register
    } = methods;

    const searchTransactionsSubmit: SubmitHandler<SearchTransactionsFormData> = async (searchTransactionsFormData) => {
        setRequestLoading(true);
        try{
            let path = "/transaction?";
            for (const [key, value] of Object.entries(searchTransactionsFormData)) {
                path += `${key}=${value}&`
            }
            path = path.slice(0, -1);
            const response = await api.get(path);
            if(response.status !== 200){
                throw new Error("Erro inesperado ao processar transações");
            }
            setTransactions(response.data);
            toast.success(`Transações encontradas com sucesso`);
        } catch(error){
            if(error instanceof Error)
                toast.error(error.message);
        }
        setRequestLoading(false);
    }

    return (
        <>
            <Flex alignItems='center' justifyContent='center' direction='column' flexGrow={1} marginBottom="120px" marginTop="40px">
                <Stack maxW='800px' alignItems="center" spacing={5}>
                    <Text color="primaryBlue" fontWeight="bold" fontSize="30px" align="center">Busque por transações</Text>
                    <FormProvider {...methods}>
                        <FormControl as="form" onSubmit={handleSubmit(searchTransactionsSubmit)}>
                            <Filters register={register} />
                            {
                                requestLoading ? 
                                (
                                    <Flex marginTop="15px" justifyContent={"center"}>
                                        <Spinner size='xl' />
                                    </Flex>
                                ) : (
                                    <>
                                        <Stack direction="row" w="100%" marginTop="10px">
                                            <BackButton />
                                            <Button type="submit"
                                                backgroundColor="primaryBlue" color="secondaryBlue" w="100%"
                                                transition={"all 0.3s ease-in-out"}
                                                _hover={{ backgroundColor: "primaryBlueHover", color: "secondaryBlueHover" }}
                                                >
                                                Buscar
                                            </Button>
                                        </Stack>
                                        <TransactionsData transactions={transactions} />
                                    </>
                                )
                            }
                        </FormControl>
                    </FormProvider>
                </Stack>
            </Flex>
        </>
    )
}