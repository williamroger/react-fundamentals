import React, { useContext } from "react";

import { CustomThemeContext } from "../../contexts/CustomThemeContext";

import { Container } from './styles';

export default function Header() {
  const { onToggleTheme, selectedTheme } = useContext(CustomThemeContext);

  return (
    <Container>
      <h1>JStack`s Blog</h1>
      <button 
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚' } 
      </button>
    </Container>
  )
}