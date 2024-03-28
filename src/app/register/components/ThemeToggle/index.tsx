"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { toggleTheme } from "@/lib/features/common";

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.common.theme);

  return (
    <div>
      <p>Current theme: {currentTheme}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        Update theme color
      </button>
    </div>
  );
};

export default ThemeToggle;
