import { AppProps } from 'next/app';
import { GoogleFonts } from 'next-google-fonts';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import GlobalStyles from '../styles/globalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';





function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient();
  

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles/>
      {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Gotham:wght@400;500;600&display=swap" /> */}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default MyApp;