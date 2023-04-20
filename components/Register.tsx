import React from 'react';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation();

  return (
    <div className='container max-w-3xl mx-auto'>
      <div>
        <div className='bg-gray-800 rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
          <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
            <div className='text-white'>
              <p className='font-medium text-lg'>{t('register.header1')}</p>
              <p>{t('register.header2')}</p>
            </div>
            <div className='lg:col-span-2'>
              <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
                <div className='md:col-span-5'>
                  <label htmlFor='full_name'>
                    {t('register.form.nameLabel')}
                  </label>
                  <input
                    type='text'
                    name='full_name'
                    id='full_name'
                    className='h-10 border mt-1 rounded px-4 w-full bg-gray-100'
                  />
                </div>
                <div className='md:col-span-5'>
                  <label htmlFor='email'>{t('register.form.emailLabel')}</label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    className='h-10 border mt-1 rounded px-4 w-full bg-gray-100'
                    placeholder={`${t('register.form.emailPlaceholder')}`}
                  />
                </div>
                <div className='md:col-span-3'>
                  <label htmlFor='address'>
                    {t('register.form.addressLabel')}
                  </label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    className='h-10 border mt-1 rounded px-4 w-full bg-gray-100'
                  />
                </div>
                <div className='md:col-span-2'>
                  <label htmlFor='city'>{t('register.form.cityLabel')}</label>
                  <input
                    type='text'
                    name='city'
                    id='city'
                    className='h-10 border mt-1 rounded px-4 w-full bg-gray-100'
                  />
                </div>
                <div className='md:col-span-5 text-right lg:mt-6 mt-2'>
                  <div className='inline-flex items-end'>
                    <button className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded'>
                      {t('register.common.button')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
