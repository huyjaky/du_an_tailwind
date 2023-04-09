import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Nunito } from '@next/font/google';


const nunito = Nunito({
  subsets: ['latin-ext'],
  weight: ['300', '500', '900'],
  variable: '--font-nunito'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />;
    </div>
  );
}
