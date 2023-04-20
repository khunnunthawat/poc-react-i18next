import classNames from 'classnames';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox, Transition } from '@headlessui/react';

import CheckIcon from './CheckIcon';
import LANGUAGES from '@/constant/translate';

import useLanguage from '@/hook/useLanguage';

const ChangeLanguage = () => {
  const { t } = useTranslation();
  const UseLanguage = useLanguage();

  return (
    <Listbox value={UseLanguage.language} onChange={UseLanguage.onChangeLang}>
      {({ open }) => (
        <>
          <Listbox.Label className='block text-sm font-medium leading-6 text-white-900'>
            {t('change')}
          </Listbox.Label>
          <div className='relative mt-2'>
            <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6'>
              <span className='flex items-center'>
                <span className='ml-3 block truncate'>
                  {UseLanguage.language.name}
                </span>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {LANGUAGES.map((lang, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-sky-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={lang}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {lang.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-sky-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default ChangeLanguage;
