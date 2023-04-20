import React, { FC, PropsWithChildren } from 'react';
import useLanguage from '@/hook/useLanguage';

const LanguageContainer: FC<PropsWithChildren> = ({ children }) => {
  useLanguage(true);
  return <>{children}</>;
};

export default LanguageContainer;
