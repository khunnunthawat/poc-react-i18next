import { useTranslation } from 'react-i18next';

import ChangeLanguage from '@/components/ChangeLanguage';
import { useRecoilValue } from 'recoil';
import { languageState } from '@/store/recoil/atoms/language';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className='grid gap-6'>
      <div className='w-80'>
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
