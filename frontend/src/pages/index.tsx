import Header from "@/components/header";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();
    const navigate = (page: string)=> {
        router.push(page);
    }

    return (
        <>
            <Flex minH="100vh" direction="column">
                <Header />
                <Flex alignItems='center' justifyContent='center' direction='column' flexGrow={1} marginBottom="80px">
                    <Stack maxW='400px' alignItems="center" spacing={5}>
                        <Text color="primaryBlue" fontWeight="bold" fontSize="30px" align="center">HOME</Text>
                        <Button w="100%" backgroundColor="primaryBlue" color="secondaryBlue"
                        _hover={{ backgroundColor: "primaryBlueHover", color: "secondaryBlueHover" }}
                        onClick={() => navigate("/register-transactions")}
                        >
                            Cadastrar transações
                        </Button>
                        <Button w="100%" backgroundColor="primaryBlue" color="secondaryBlue"
                        _hover={{ backgroundColor: "primaryBlueHover", color: "secondaryBlueHover" }}
                        onClick={() => navigate("/search-transactions")}
                        >
                            Buscar transações
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </>
    )
}