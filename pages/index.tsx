import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import ChangeLanguage from '@/components/ChangeLanguage';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className='grid gap-6 container max-w-3xl mx-auto'>
      <div className='text-right'>
        <Link
          href='/register'
          className='text-white text-base hover:text-sky-400'
        >
          {`------>`} {t('home.registerPage')}
        </Link>
      </div>
      <div>
        <h3 className='text-white text-lg'>
          {t('home.title', { name: 'Bitnance' })}
        </h3>
        <h3 className='text-white text-lg'>{t('home.description')}</h3>
      </div>

      <div>
        <ChangeLanguage />
      </div>
    </div>
  );
}
