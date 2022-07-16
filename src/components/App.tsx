import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { Routes, Route, useLocation } from "react-router-dom";
import constants from "../constants";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes";
import GlobalStylesheet from "./GlobalStyles";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

import { getInitialColorMode } from "../helpers/index";

const { GOOGLE_ANALYTICS_TRACKING_CODE } = constants;

function App() {
  ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_CODE);
  const location = useLocation();
  const [colorMode, rawSetColorMode] = useState(getInitialColorMode);

  const setColorMode = (value: string) => {
    rawSetColorMode(value);
    window.localStorage.setItem("color-mode", value);
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <ThemeProvider theme={colorMode === "light" ? lightTheme : darkTheme}>
      <GlobalStylesheet />
      <Routes>
        <Route
          index
          element={<Home colorMode={colorMode} setColorMode={setColorMode} />}
        />
        <Route
          path="/posts"
          element={<Posts colorMode={colorMode} setColorMode={setColorMode} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
