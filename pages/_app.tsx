import { Suspense, useEffect } from 'react';

import type { AppProps } from 'next/app';
import '@/i18n/config';

import '@/styles/globals.css';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('useEffect :', '------->');
  }, []);

  return (
    <Suspense fallback='loading'>
      <Component {...pageProps} />
    </Suspense>
  );
}
