import dynamic from 'next/dynamic';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import '@/i18n/config';
import '@/styles/globals.css';

const LanguageContainer = dynamic(import('@/components/LanguageContainer'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LanguageContainer>
        <div className='flex min-h-screen items-center justify-center'>
          <Component {...pageProps} />
        </div>
      </LanguageContainer>
    </RecoilRoot>
  );
}
