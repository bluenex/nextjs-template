import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraProviderDecorator = ({ children }: { children: ReactNode }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default ChakraProviderDecorator;
