'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

// const VisibleContext = (_: boolean) => {
//   console.warn('VisibleContext has not been provided. You are calling a noop function.');
// };

export const modelVisibleContext = createContext({
  modelVisible: false,
  setModelVisible: (visible: boolean) => {}
});

const WithModelVisible = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <modelVisibleContext.Provider
      value={{
        modelVisible: visible,
        setModelVisible: setVisible
      }}
    >
      {/* {isBrowserCompatibility() ? children : <BrowserCompatibilityPage />} */}
      {children}
    </modelVisibleContext.Provider>
  );
};

export default WithModelVisible;

export const useModelVisible = () => {
  return useContext(modelVisibleContext);
};
