import { api } from "@/services/api/api";
import { Button, Flex, FormControl, FormLabel, Image, Input, Spinner, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export type RegisterTransactionsFormData = {
    file: FileList,
};

export default function RegisterTransactions() {
    const [requestLoading, setRequestLoading] = useState(false);
    const methods = useForm<RegisterTransactionsFormData>({
        reValidateMode: 'onChange',
    });
    const {
        handleSubmit,
        reset,
        register
    } = methods;

    const registerTransactionsSubmit: SubmitHandler<RegisterTransactionsFormData> = async ({
        file
    }) => {
        setRequestLoading(true);
        const form = new FormData();
        form.append('file', file[0]);
        try{
            const response = await api.post("/transaction", form);
            if(response.status !== 200){
                throw new Error("Erro inesperado ao processar transações");
            }
            toast.success(`Transações processadas em: ${response.data.executionTime}`);
        } catch(error){
            if(error instanceof Error)
                toast.error(error.message);
        }
        reset();
        setRequestLoading(false);
    }

    return (
        <>
            <Flex alignItems='center' justifyContent='center' direction='column' flexGrow={1} marginBottom="80px">
                <Stack maxW='400px' alignItems="center" spacing={5}>
                    <Text color="primaryBlue" fontWeight="bold" fontSize="30px" align="center">Adicione dados de transações</Text>
                    <Input
                        type="file"
                        onChange={()=>console.log("teste")}
                        display="none"
                        id="file-input"
                    />
                    <FormProvider {...methods}>
                        <FormControl as="form" isRequired onSubmit={handleSubmit(registerTransactionsSubmit)}>
                            <FormLabel>Escolha um arquivo</FormLabel>
                            <Input
                                type="file"
                                accept=".txt"
                                w="100%"
                                p="2"
                                borderColor="grey.100"
                                borderRadius="md"
                                textColor="gray.500"
                                borderWidth="1px"
                                as={"input"}
                                css={{
                                    "&::file-selector-button": {
                                    alignItems: "center",
                                    textAlign: "center",
                                    display: "none",
                                    backgroundColor: "blue.400",
                                    _hover: {
                                        backgroundColor: "blue.500",
                                    },
                                    _active: {
                                        backgroundColor: "blue.600",
                                    },
                                    },
                                }}
                                placeholder="Suyash"
                                {
                                    ...register("file", {
                                    required: true,
                                })}
                            />
                            {
                                requestLoading ? 
                                (
                                    <Flex marginTop="15px" justifyContent={"center"}>
                                        <Spinner size='xl' />
                                    </Flex>
                                ) : (
                                    <Stack direction="row" w="100%" marginTop="10px">
                                        <Button
                                            backgroundColor="whiteDefault" color="primaryBlue" border="1px solid" borderColor="primaryBlue" w="100%"
                                            transition={"all 0.3s ease-in-out"}
                                            _hover={{ backgroundColor: "whiteDefaultHover", color: "primaryBlueHover", borderColor: "primaryBlueHover" }}
                                            >
                                            Voltar
                                        </Button>
                                        <Button type="submit"
                                            backgroundColor="primaryBlue" color="secondaryBlue" w="100%"
                                            transition={"all 0.3s ease-in-out"}
                                            _hover={{ backgroundColor: "primaryBlueHover", color: "secondaryBlueHover" }}
                                            >
                                            Enviar Arquivo
                                        </Button>
                                    </Stack>
                                )
                            }
                        </FormControl>
                    </FormProvider>
                </Stack>
            </Flex>
        </>
    )
}