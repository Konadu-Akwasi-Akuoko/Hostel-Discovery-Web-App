"use client";
import { store } from "@/store/store";
import { selectIsDark, setIsDarkTheme } from "@/store/themeSlice";
import React, { PointerEvent } from "react";
import { useSelector } from "react-redux";

export default function ThemeButton() {
  const isDark = useSelector(selectIsDark);
  // TODO: Work on the logic here, because it's too unpredictable
  const onButtonClick = (e: PointerEvent<HTMLButtonElement>) => {
    store.dispatch(setIsDarkTheme(!isDark));
    if (isDark) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <button
      onClick={onButtonClick}
      className="p-2 bg-tomato-3 hover:bg-tomato-5 rounded-lg border border-tomato-7"
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path
              d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56Z"
              opacity=".2"
            />
            <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="currentColor"
              d="M12 21a9 9 0 0 0 8.997-9.252a7 7 0 0 1-10.371-8.643A9 9 0 0 0 12 21Z"
              opacity=".16"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21a9 9 0 0 0 8.997-9.252a7 7 0 0 1-10.371-8.643A9 9 0 0 0 12 21Z"
            />
          </g>
        </svg>
      )}
    </button>
  );
}
