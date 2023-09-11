// import React from "react";
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          myColor: {
            main: "#F6F9FC",
          },
          text: {
            primary: "#000",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
          bg: {
            main: "#F6F6F6",
            secondary: "#fff",
            tertiary: "#000",
            hover: "#777",
            icon: "#eee",
          },
          shadow: {
            main: "#f1ebeb",
          },
          border: {
            main: "#ccc",
          },
        }
      : {
          // palette values for dark mode
          myColor: {
            main: "#252b32",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          bg: {
            main: "#1D2021",
            secondary: "#000",
            tertiary: "#333",
            hover: "#1D2021",
            icon: "#1D2021",
          },
          shadow: {
            main: "#777",
          },
          border: {
            main: "#333",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
