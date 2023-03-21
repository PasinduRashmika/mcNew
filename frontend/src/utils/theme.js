import {  useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { palette } from "./colors"

//mui theme setting
export const themeSettings = (mode) => {

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: palette.dark.primary[500],
              dark: palette.dark.primary[900],
              light: palette.dark.primary[0],
            },
            secondary: {
              main: palette.dark.primary[100],
            },
            sidebar: {
              main: palette.dark.primary[900],
              normal: palette.dark.primary[0],
              normalText: palette.dark.primary[500],
              active: palette.dark.primary[500],
              activeText: palette.dark.primary[0],
              hover:palette.dark.primary[600],
              hoverText:palette.dark.primary[0],
              menuItem: palette.dark.primary[500],
              menutItemActive: palette.dark.primary[500],
            },
            button:{
              color: palette.dark.primary[500],
              text: palette.dark.primary[0],
              hover: palette.dark.primary[0],
              hoverText: palette.dark.primary[500],
              red: "#ff0000"
            },
            topbar: {
              main: palette.dark.primary[800],
              searchBox: palette.dark.primary[700]
            },
            datagrid: {
              main: "",
              header: palette.dark.primary[500]
            },
            text:{
              main: palette.dark.primary[0],
              sub: palette.dark.primary[200],
              background: palette.dark.primary[700],
            },
            h1:{
              main: palette.dark.primary[0]
            },
            modal: {
              main: palette.dark.blur[300],
              secondary: palette.dark.primary[800],
              text: palette.dark.primary[0]
            },
            background: {
              default: palette.dark.primary[800],
            },
          }
        : {
            //for light mode
            primary: {
              main: palette.light.primary[500],
              dark: palette.dark.primary[900],
              light: palette.dark.primary[0],
            },
            secondary: {
              main: palette.light.primary[100],
            },
            sidebar: {
              main: palette.light.primary[100],
              normal: palette.light.primary[0],
              normalText: palette.light.primary[500],
              active: palette.light.primary[500],
              activeText: palette.light.primary[0],
              hover:palette.light.primary[600],
              hoverText:palette.light.primary[0],
            },
            button:{
              dark: palette.light.primary[600],
              color:  palette.light.primary[100],
              text: palette.light.primary[500],
              hover: palette.light.primary[500],
              hoverText: palette.light.primary[0],
              red: "#ff0000"
            },
            topbar: {
              main: palette.light.primary[0],
              searchBox: palette.dark.primary[100],
            },
            datagrid: {
              main: "",
              header: palette.light.primary[500]
            },
            text:{
              main: palette.light.primary[500],
              sub: palette.light.primary[300],
              background: palette.light.primary[100],
            },
            h1:{
              main: palette.light.primary[500],
            },
            modal: {
              main: palette.light.blur[300],
              secondary: palette.light.primary[0],
              text: palette.light.primary[0]
            },
            background: {
              default: palette.light.primary[0],
            },
          }),
    },
    typography: {
      h6: {
        fontSize: "1rem",
      }
    },
  };
};


//this is done for to increase the performance
export const useMode = () => {
  //storing the mode state
  const [mode, setMode] = useState("light");

  //function to change the theme
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevState) => (prevState === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  //passing the color theme to the mui theme according to the mode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
