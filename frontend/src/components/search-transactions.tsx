import { Transaction } from "@/services/api/api";
import { Button, Flex, FormControl, FormLabel, Input, Spinner, Stack, Text } from "@chakra-ui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { BackButton } from "./back-button";
import { Filters } from "./filters";
import { TransactionsData } from "./transactions-data";
import { useRouter } from "next/router";
import PageControl from "./page-control";

type SearchTransactionsProps = {
    transactions: Transaction[];
}

export type SearchTransactionsFormData = {
    page: number;
	pageSize: number;
	transactionId: string;
	name: string;
	cpfCnpj: string;
	startDate: Date;
	endDate: Date;
};

export default function SearchTransactions({ transactions }: SearchTransactionsProps) {
    const router = useRouter();
    const methods = useForm<SearchTransactionsFormData>({
        reValidateMode: 'onChange',
    });
    const {
        handleSubmit,
        reset,
        register
    } = methods;

    const searchTransactionsSubmit: SubmitHandler<SearchTransactionsFormData> = async (searchTransactionsFormData) => {
        let path = "/search-transactions?";
        for (const [key, value] of Object.entries(searchTransactionsFormData)) {
            path += `${key}=${value}&`
        }
        path = path.slice(0, -1);
        router.push(path);
    }

    return (
        <>
            <Flex alignItems='center' justifyContent='center' direction='column' flexGrow={1} marginBottom="120px" marginTop="40px">
                <Stack maxW='800px' alignItems="center" spacing={5}>
                    <Text color="primaryBlue" fontWeight="bold" fontSize="30px" align="center">Busque por transações</Text>
                    <FormProvider {...methods}>
                        <FormControl as="form" onSubmit={handleSubmit(searchTransactionsSubmit)}>
                            <Filters register={register} reset={reset} />
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
                            <PageControl haveTransactionsInPage={transactions.length > 0} />
                        </FormControl>
                    </FormProvider>
                </Stack>
            </Flex>
        </>
    )
}