"use client";

import { useDarkModeState } from "@/app/utils/darkMode/indedx";

const Header = () => {
  const { darkModeState, setDarkModeState } = useDarkModeState();
  return (
    <div className="bg-black">
      <button
        onClick={() =>
          setDarkModeState(darkModeState === "isDark" ? "isLight" : "isDark")
        }
        className="text-white"
      >
        {darkModeState === "isDark" ? "Is Light" : "isDark"}
      </button>
    </div>
  );
};

export default Header;
