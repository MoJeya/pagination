import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import GlobalStyles from '../public/styles/globalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
