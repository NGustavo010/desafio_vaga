import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type PageControlProps = {
    haveTransactionsInPage: boolean
}

export default function PageControl({ haveTransactionsInPage }: PageControlProps)  {
    const router = useRouter();
    const page = router.query.page ?? "1";
    const navigate = (page: number)=> {
        router.query.page = page.toString();
        router.push(router);
    }
    return (
        <>
            <Flex marginTop={haveTransactionsInPage ? "40px" : "100px"} justifyContent="center">
                <Button
                    backgroundColor="whiteDefault" color="primaryBlue" border="1px solid" borderColor="primaryBlue"
                    transition={"all 0.3s ease-in-out"}
                    _hover={{ backgroundColor: "whiteDefaultHover", color: "primaryBlueHover", borderColor: "primaryBlueHover" }}
                    onClick={() => navigate(Number(page) - 1)}
                    h="45px"
                    w="50px"
                    isDisabled={Number(page) === 1}
                    >
                    <FaArrowLeft />
                </Button>
                <Box
                    h="25px"
                    w="50px"
                >
                    <Text color="primaryBlue" fontWeight="bold" fontSize="24px" align="center">
                        {page}
                    </Text>
                </Box>
                <Button
                    backgroundColor="whiteDefault" color="primaryBlue" border="1px solid" borderColor="primaryBlue"
                    transition={"all 0.3s ease-in-out"}
                    _hover={{ backgroundColor: "whiteDefaultHover", color: "primaryBlueHover", borderColor: "primaryBlueHover" }}
                    onClick={() => navigate(Number(page) + 1)}
                    h="45px"
                    w="50px"
                    isDisabled={haveTransactionsInPage === false}
                    >
                    <FaArrowRight />
                </Button>
            </Flex>
        </>
    )
}