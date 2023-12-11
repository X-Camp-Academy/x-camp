'use client';
import { useLocalStorageState } from 'ahooks';
import React, { ReactNode } from 'react';

type LangType = 'zh' | 'en';

const DefaultState = {
  lang: 'zh' as LangType,
  loginState: ''
};

export type LocalState = Partial<typeof DefaultState>;

export type LocalStateContextProps = {
  state?: LocalState;
  set: <T extends keyof LocalState>(key: T, value?: LocalState[T]) => void;
}

const LocalStateContext = React.createContext<LocalStateContextProps>({ state: {}, set: () => console.warn('Missing LocalStateContext.Provider') });

export const LocalStateProvider = ({ children }: { children: ReactNode }) => {
  const [localState, setLocalState] = useLocalStorageState<LocalState>('local-state', {
    defaultValue: DefaultState
  });

  return (
    <LocalStateContext.Provider
      value={{
        state: localState,
        set: (key, value) =>
          setLocalState({
            ...localState,
            [key]: value
          })
      }}
    >
      {children}
    </LocalStateContext.Provider>
  );
};