import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    primaryBlue: "#060132",
    primaryBlueHover: "rgba(6, 1, 50, 0.8)",
    secondaryBlue: "#65d8c3",
    secondaryBlueHover: "rgba(101, 216, 195, 0.8)",
    whiteDefault: "#ffffff",
    whiteDefaultHover: "#f3f6f4",
  },
})