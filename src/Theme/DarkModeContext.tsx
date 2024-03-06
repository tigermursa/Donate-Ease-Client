import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    storedDarkMode ? JSON.parse(storedDarkMode) : false
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode: unknown) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }

  return context;
};
