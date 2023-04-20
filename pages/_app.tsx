import { Suspense, useEffect } from 'react';
import type { AppProps } from 'next/app';
import '@/i18n/config';

import '@/styles/globals.css';

import axios from 'axios';
import { useTranslation } from 'react-i18next';

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
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log('useEffect :', '------->');
    !(async () => {
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

      const lang = (await localStorage.getItem('lang')) ?? 'en';
      console.log('lang :', '------->', lang);
      i18n.changeLanguage(lang);
    })();
  }, [i18n]);

  return <Component {...pageProps} />;

  // return (
  //   <Suspense fallback='loading'>
  //     <Component {...pageProps} />
  //   </Suspense>
  // );
}
