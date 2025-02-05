import React, { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from '../../styles/global';

import { CustomThemeProvider } from "../../contexts/CustomThemeContext";

import Layout from "../Layout";

import themes from '../../styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((oldTheme) => oldTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CustomThemeProvider 
        onToggleTheme={handleToggleTheme} 
        selectedTheme={theme}
      >
        <GlobalStyles />
        <Layout />
      </CustomThemeProvider>
    </ThemeProvider>
  )
}

export default App;

