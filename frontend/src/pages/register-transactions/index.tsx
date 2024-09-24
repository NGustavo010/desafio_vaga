import Header from "@/components/header";
import RegisterTransactions from "@/components/register-transactions";
import { Button, Flex } from "@chakra-ui/react";

export default function Page() {
    return (
        <>
            <Flex minH="100vh" direction="column">
                <Header />
                <RegisterTransactions />
            </Flex>
        </>
    )
}