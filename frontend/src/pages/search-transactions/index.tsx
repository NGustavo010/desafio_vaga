import Header from "@/components/header";
import SearchTransactions from "@/components/search-transactions";
import { Flex } from "@chakra-ui/react";

export default function Page() {
    return (
        <>
            <Flex minH="100vh" direction="column">
                <Header />
                <SearchTransactions />
            </Flex>
        </>
    )
}