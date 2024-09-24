import Header from "@/components/header";
import SearchTransactions from "@/components/search-transactions";
import { api, Transaction } from "@/services/api/api";
import { Flex } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { query } = context;
    try {
        let path = "/transaction?";
        if (!query.page) {
            query.page = "1";
        }
        for (const [key, value] of Object.entries(query)) {
            path += `${key}=${value}&`
        }
        path = path.slice(0, -1);
        const response = await api.get(path);
        if (response.status !== 200) {
            throw new Error("Erro ao buscar transações");
        }
        return {
            props: { transactions: response.data as Transaction[] },
        };
    } catch (error) {
        return {
        props: { transactions: [] },
        };
    }
};

export default function Page ({ transactions }: { transactions: Transaction[] }) {
    return (
        <>
            <Flex minH="100vh" direction="column">
                <Header />
                <SearchTransactions transactions={transactions} />
            </Flex>
        </>
    )
}