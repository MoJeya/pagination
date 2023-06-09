import { AppProps } from 'next/app';
import { GoogleFonts } from 'next-google-fonts';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Gotham:wght@400;500;600&display=swap" />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;