import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import GlobalStyles from '../public/styles/globalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
