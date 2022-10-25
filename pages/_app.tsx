import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { client } from "../src/apollo";
import "../styles/globals.css";
import { colors } from "../styles/chakra-ui/colors";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({ colors });
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
