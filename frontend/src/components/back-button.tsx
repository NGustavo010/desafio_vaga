import { Button } from "@chakra-ui/react"
import { useRouter } from "next/router";

export const BackButton = () => {
    const router = useRouter();

    return (
        <>
            <Button
                backgroundColor="whiteDefault" color="primaryBlue" border="1px solid" borderColor="primaryBlue" w="100%"
                transition={"all 0.3s ease-in-out"}
                _hover={{ backgroundColor: "whiteDefaultHover", color: "primaryBlueHover", borderColor: "primaryBlueHover" }}
                onClick={() => router.back()}
                >
                Voltar
            </Button>
        </>
    )
}