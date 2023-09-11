import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Articles from "./Components/Pages/Articles";
import ScrollToTopFab from "./Components/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="home" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="articles" element={<Articles />} />
          </Routes>
          <ScrollToTopFab />
          <Footer />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
