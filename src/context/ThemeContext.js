"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  // toggle between themes
  const toggle = () => {
    // setMode((prev) => (prev === "dark" ? "light" : "dark"));
    // document.querySelector("body").setAttribute("data-theme", "dark" ? "light" : "light");
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      document.querySelector("body").setAttribute("data-theme", newMode);
      return newMode;
    });
  };

  // use the stored theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setMode(storedTheme);
      document.querySelector("body").setAttribute("data-theme", storedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
