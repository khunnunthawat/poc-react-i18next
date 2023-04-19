import { useTranslation } from 'react-i18next';

import ChangeLanguage from '@/components/ChangeLanguage';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='grid gap-6'>
        <div className='w-80'>
          <h3 className='text-white text-lg'>
            {t('title', { name: 'Bitnance' })}
          </h3>
          <h3 className='text-white text-lg'>{t('description')}</h3>
        </div>
        <div>
          <ChangeLanguage />
        </div>
      </div>
    </div>
  );
}
