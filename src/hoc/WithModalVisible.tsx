'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

export const ModalVisibleContext = createContext({
  freeConsultationVisible: false,
  setFreeConsultationVisible: (visible: boolean) => {},
  weeklyOpenHouseVisible: false,
  setWeeklyOpenHouseVisible: (visible: boolean) => {}
});

export const useModalVisible = () => {
  return useContext(ModalVisibleContext);
};

const WithModalVisible = ({ children }: Props) => {
  const [freeConsultationVisible, setFreeConsultationVisible] = useState(false);
  const [weeklyOpenHouseVisible, setWeeklyOpenHouseVisible] = useState(false);
  return (
    <ModalVisibleContext.Provider
      value={{
        freeConsultationVisible,
        setFreeConsultationVisible,
        weeklyOpenHouseVisible,
        setWeeklyOpenHouseVisible
      }}
    >
      {children}
    </ModalVisibleContext.Provider>
  );
};

export default WithModalVisible;
