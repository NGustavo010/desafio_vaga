import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <>
            <Flex justifyContent='center' padding="10px 0px" gap="20px" backgroundColor="secondaryBlue">
                <Box boxSize='60px'>
                    <Image src='favicon.ico' alt='Dan Abramov' />
                </Box>
                <Stack color="primaryBlue" spacing={0}>
                    <Text fontWeight="bold" fontSize="20px">Zeztra</Text>
                    <Text fontWeight="semibold">Controle de transações</Text>
                </Stack>
            </Flex>
        </>
    )
}