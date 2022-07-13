import { useEffect } from "react";
import ReactGA from "react-ga";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStylesheet from "./components/GlobalStyles";
import Home from "./pages/Home";

function GoogleAnalyticsPageTracker({ children }: any) {
  // This is dirty AF isn't it?
  const GOOGLE_ANALYTICS_TRACKING_CODE = "UA-49026829-1";
  const location = useLocation();
  ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_CODE);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);
  return <></>;
}

function App() {
  const theme = {
    background: "var(--color-white)",
    text: "var(--color-black)",
  };

  return (
    <ThemeProvider theme={theme}>
      <GoogleAnalyticsPageTracker />
      <GlobalStylesheet />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
