import { theme } from '@/themes/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}