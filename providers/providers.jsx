import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/chakra.config';

export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
