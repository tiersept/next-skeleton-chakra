import { Providers } from '@/providers/providers';

function App({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
