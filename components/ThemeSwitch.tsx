"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";
import {  BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-transparent w-[3rem] h-[3rem]  border-2 border-black dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-transparent"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
}