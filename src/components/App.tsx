import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { Routes, Route, useLocation } from "react-router-dom";
import constants from "../constants";
import { ThemeProvider } from "styled-components";
import GlobalStylesheet from "./GlobalStyles";
import Home from "../pages/Home";

const { GOOGLE_ANALYTICS_TRACKING_CODE } = constants;

function App() {
  const location = useLocation();
  const [isDarkMode] = useState();
  ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_CODE);

  // TODO: complete dark mode theme switching
  const theme = {
    background: "var(--color-white)",
    text: "var(--color-black)",
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  useEffect(() => {
    console.log("Are we in Dark mode @ APP?", isDarkMode ? "Yes" : "No");
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      {isDarkMode && <h1>Dark Mode is Active</h1>}
      <GlobalStylesheet />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
