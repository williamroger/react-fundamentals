import React, { useContext } from "react";

import { CustomThemeContext } from "../../contexts/CustomThemeContext";

import { Container } from './styles';

export default function Footer() {
  const { onToggleTheme, selectedTheme } = useContext(CustomThemeContext);

  return (
    <Container>
      <p>Jstack`s Blog. Todos os direitos reservados.</p>
      <button 
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}