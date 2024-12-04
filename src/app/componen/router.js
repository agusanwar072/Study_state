"use client";

import { useDarkModeState } from "../utils/darkMode/indedx";

export default function Container({ children }) {
  const { darkModeState, setDarkModeState } = useDarkModeState();
  return (
    <div
      className={`${
        darkModeState === "isDark" ? "bg-black " : "bg-white "
      }w-[100vw] h-[100vh] overflow-hidden`}
      style={{
        color:
          darkModeState === "isDark" ? "white !important" : "black !important",
      }}
    >
      {children}
    </div>
  );
}
