import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';

import { languageState } from '@/store/recoil/atoms/language';

const useLanguage = (isDetect = false) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useRecoilState(languageState);

  const onChangeLang = useCallback(
    (valueChange: any) => {
      setLanguage(valueChange);
      i18n.changeLanguage(valueChange.key);
    },
    [i18n]
  );

  useEffect(() => {
    if (isDetect && language) {
      setLanguage(language);
      i18n.changeLanguage(language.key);
      return;
    }
  }, [i18n]);

  return { language, onChangeLang };
};

export default useLanguage;
