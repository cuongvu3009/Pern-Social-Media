import { createContext, useEffect, useState } from 'react';

interface DarkModeContextProps {
  mode: string;
  switchDark: () => void;
  switchLight: () => void;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextProps);

export const DarkModeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<string>('light');

  const switchDark = () => {
    setMode('dark');
  };

  const switchLight = () => {
    setMode('light');
  };

  useEffect(() => {
    return localStorage.setItem('darkMode', mode);
  }, [mode]);

  return (
    <DarkModeContext.Provider value={{ mode, switchDark, switchLight }}>
      {children}
    </DarkModeContext.Provider>
  );
};
