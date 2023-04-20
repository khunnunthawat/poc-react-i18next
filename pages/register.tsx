import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Register from '@/components/Register';
import ChangeLanguage from '@/components/ChangeLanguage';

export default function RegisterPage() {
  const { t } = useTranslation();

  return (
    <div className='grid gap-6'>
      <div className='text-left'>
        <Link href='/' className='text-white text-base hover:text-sky-400'>
          {`<------`} {t('home.router')}
        </Link>
      </div>
      <div>
        <Register />
      </div>
      <div>
        <ChangeLanguage />
      </div>
    </div>
  );
}
