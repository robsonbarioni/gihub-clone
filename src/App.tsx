import "react-calendar-heatmap/dist/styles.css";

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeName, themes } from "./pages/themes";

import GlobalStyles from "./pages/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";

function App() {
    const [themeName, setThemeName] = useState<ThemeName>("light");
    const currentTheme = themes[themeName];

    return (
        <ThemeProvider theme={currentTheme}>
            <BrowserRouter>
                <Header themeName={themeName} setThemeName={setThemeName} />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/:username" element={<Profile />} />
                    <Route path="/:username/:reponame" element={<Repo />} />
                </Routes>
                <Footer />
                <GlobalStyles />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
