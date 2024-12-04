"use client";

import { createContext, useContext, useState, useEffect } from "react";

const DarkModeStateContext = createContext(null);

export const useDarkModeState = () => {
  const context = useContext(DarkModeStateContext);

  if (!context) {
    throw new Error("useDarkModeState is not defined");
  }

  const [darkModeState, setDarkModeState] = context;

  const handelDarkMode = (value) => {
    setDarkModeState(value);

    if (typeof window !== undefined) {
      window.localStorage.setItem("darkMode", value);
    }
  };

  return { darkModeState: darkModeState, setDarkModeState: handelDarkMode };
};

export const DarkModeProvider = ({ children, value }) => {
  const [darkModeState, setDarkModeState] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      const value = window.localStorage.getItem("darkMode");
      setDarkModeState(value ? value : "isDark");
    }
  }, []);

  return (
    <DarkModeStateContext.Provider value={[darkModeState, setDarkModeState]}>
      {children}
    </DarkModeStateContext.Provider>
  );
};