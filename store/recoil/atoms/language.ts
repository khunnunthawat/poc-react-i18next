import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const languageState = atom<any>({
  key: 'languageState',
  default: { key: 'en', name: 'ENGLISH' },
  effects_UNSTABLE: [persistAtom],
});
