import { NextSeoProps } from 'next-seo';

const config: NextSeoProps = {
  title: 'NEXT SEO | สวัสดีชาวโลก',
  description: 'NEXT SEO | สวัสดีชาวโลก',
  canonical: 'https://poc-react-i18next.vercel.app/',
  openGraph: {
    title: 'NEXT SEO | สวัสดีชาวโลก',
    description: 'NEXT SEO | สวัสดีชาวโลก',
    type: 'website',
    locale: 'en_IE',
    url: 'https://poc-react-i18next.vercel.app/',
    siteName: 'https://poc-react-i18next.vercel.app/',
    images: [
      {
        url: '/meta/image.png',
        width: 800,
        height: 600,
        alt: 'NEXT SEO | Hello world',
        type: 'image/png',
      },
      {
        url: '/meta/image.png',
        width: 900,
        height: 800,
        alt: 'NEXT SEO | Hello world',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;
