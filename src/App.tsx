import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStylesheet from "./components/GlobalStyles";
import Home from "./pages/Home";

function App() {
  const theme = {
    background: "var(--color-white)",
    text: "var(--color-black)",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesheet />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
