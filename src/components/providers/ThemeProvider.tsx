"use client";
import { store } from "@/store/store";
import { selectIsDark, setIsDarkTheme } from "@/store/themeSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDark = useSelector(selectIsDark);
  // Set theme based on local storage or os preference
  useEffect(() => {
    // Check to see the local storage for a theme preference
    // If not check to see if the user prefers dark mode or not using
    // windows.match media, dispatch an action to the store accordingly
    const theme = localStorage.getItem("theme");
    if (theme) {
      if (theme === "light") {
        store.dispatch(setIsDarkTheme(false));
      } else if (theme === "dark") {
        store.dispatch(setIsDarkTheme(true));
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      store.dispatch(setIsDarkTheme(false));
    } else {
      store.dispatch(setIsDarkTheme(true));
    }
  }, []);
  return (
    <div className={`${isDark ? "dark" : "light"} bg-tomato-1 min-h-screen`}>
      {children}
    </div>
  );
}
