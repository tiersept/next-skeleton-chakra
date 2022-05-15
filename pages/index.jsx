import { Layout } from '@/layouts/default';
import { Container, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading as="h1" fontSize="6xl" color="brand.800" textAlign="center" fontWeight="bold">
          It's a fucking Next.js skeleton /w Chakra
        </Heading>
      </Container>
    </Layout>
  );
}
