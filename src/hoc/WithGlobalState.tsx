'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

export const GlobalStateContext = createContext({
  freeConsultationVisible: false,
  setFreeConsultationVisible: (visible: boolean) => {},
  weeklyOpenHouseVisible: false,
  setWeeklyOpenHouseVisible: (visible: boolean) => {},
  navVisible: true,
  setNavVisible: (visible: boolean) => {}
});

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

const WithGlobalState = ({ children }: Props) => {
  const [freeConsultationVisible, setFreeConsultationVisible] = useState(false);
  const [weeklyOpenHouseVisible, setWeeklyOpenHouseVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  return (
    <GlobalStateContext.Provider
      value={{
        freeConsultationVisible,
        setFreeConsultationVisible,
        weeklyOpenHouseVisible,
        setWeeklyOpenHouseVisible,
        navVisible,
        setNavVisible
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default WithGlobalState;
