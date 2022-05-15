import { TheHeader } from '@/components/TheHeader';
import { VStack } from '@chakra-ui/react';

export const Layout = ({ children }) => (
  <VStack minH="100vh">
    <TheHeader />
    <main className="grow">{children}</main>
  </VStack>
);
