import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { ColorModeContext } from "../../utils/ColorModeContext";
import { useMode } from "../../utils/theme";
import Footer from "../Footer/Footer";
import { ContextProvider } from "../../utils/ContextProvider";
const RootLayout = () => {
  const [theme, colorMode] = useMode();

  return (
    <ContextProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
          <footer
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "0 0 100%",
            }}
          >
            {/* <Footer /> */}
          </footer>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ContextProvider>
  );
};

export default RootLayout;
