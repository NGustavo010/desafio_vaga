import { Transaction } from "@/services/api/api"
import { Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"

type TransactionsDataProps = {
    transactions: Transaction[]
}

export const TransactionsData = ({transactions}: TransactionsDataProps) => {
    return (
        <Flex marginTop="100px" justifyContent="center">
        {
            transactions.length === 0 
            ? 
                <Text color="primaryBlue" fontWeight="bold" fontSize="20px">
                    Nenhuma transação encontrada
                </Text> 
            : 
                <TableContainer>
                    <Table variant='simple'>
                        <Thead backgroundColor="primaryBlue">
                            <Tr>
                                <Th color="secondaryBlue">ID</Th>
                                <Th color="secondaryBlue">Nome</Th>
                                <Th color="secondaryBlue">CPF/CNPJ</Th>
                                <Th color="secondaryBlue">Data</Th>
                                <Th color="secondaryBlue">Valor</Th>
                            </Tr>
                        </Thead>
                        <Tbody color="primaryBlue">
                            {transactions.map(transaction => (
                                <Tr key={transaction.id}>
                                    <Td>{transaction.id}</Td>
                                    <Td>{transaction.nome}</Td>
                                    <Td>{transaction.cpfCnpj}</Td>
                                    <Td>{transaction.data}</Td>
                                    <Td>{transaction.valor}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
        }  
        </Flex>
    )
}