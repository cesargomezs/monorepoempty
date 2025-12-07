// ThemeSwitcher.tsx (Usando dispatch)
import React from 'react';
import { useThemeDispatcher } from './themeContext'; // Importamos el hook que devuelve dispatch


const ThemeSwitcher: React.FC = () => {
  // Obtenemos el tema actual y la función dispatch
  const { theme, dispatch } = useThemeDispatcher();

  // Función de manejo del click
  const handleToggle = () => {
    // Enviamos una acción de tipo 'TOGGLE_THEME'
    dispatch({ type: 'TOGGLE_THEME' });
  };

  // Renderizado
  return (
    <button
      onClick={handleToggle}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '10px',
        // Estilos para el botón
        backgroundColor: theme === 'light' ? '#333' : '#fff',
        color: theme === 'light' ? '#fff' : '#000',
      }}
    >
      {theme === 'light' ?  '🌙':'☀️'}
    </button>
  );
};

export default ThemeSwitcher;