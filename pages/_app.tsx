// import { Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

import '@/i18n/config';

import '@/styles/globals.css';

// import axios from 'axios';
import { RecoilRoot } from 'recoil';

const LanguageContainer = dynamic(import('@/components/LanguageContainer'), {
  ssr: false,
});

// import LanguageContainer from '@/components/LanguageContainer';
// import { useTranslation } from 'react-i18next';
// import { languageState } from '@/store/recoil/atoms/language';

// interface IGeolocation {
//   country_code: string;
//   country_name: string;
//   city: string;
//   postal: string;
//   latitude: number;
//   longitude: number;
//   IPv4: string;
//   state: string;
// }

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App({ Component, pageProps }: AppProps) {
  // const { i18n } = useTranslation();

  // const [language, setLanguage] = useRecoil(languageState);

  // const language = useRecoilValue(languageState);
  // console.log('language :', '------->', language);

  // useEffect(() => {
  // console.log('useEffect :', '------->');
  // !(async () => {
  // if (localStorage.getItem('lang')) {
  //   return;
  // }
  // const res = await axios.get('https://geolocation-db.com/json/');
  // console.log('geolocation-db res :', '------->', res);
  // const geolocation: IGeolocation = res.data;
  // console.log('geolocation :', '------->', geolocation);
  // if (geolocation.country_code === 'KO') {
  //   localStorage.setItem('lang', 'ko');
  //   i18n.changeLanguage('ko');
  //   return;
  // }
  // const lang = (await localStorage.getItem('lang')) ?? 'en';
  // console.log('lang :', '------->', lang);
  // i18n.changeLanguage(lang);
  // })();
  // }, [i18n]);

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
