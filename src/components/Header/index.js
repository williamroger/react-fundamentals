import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';

import { CustomThemeContext } from "../../contexts/CustomThemeContext";

import { Container } from './styles';

export default function Header() {
  const { onToggleTheme, selectedTheme } = useContext(CustomThemeContext);
  const history = useHistory();
  
  function handleNavigate() {
    history.push('/posts');
  }

  return (
    <Container>
      <h1>JStack`s Blog</h1>
      <button 
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚' } 
      </button>

      <button onClick={handleNavigate} style={{color: '#fff'}}>Navegar</button>
    </Container>
  )
}