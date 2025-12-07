import React from 'react';
import { useThemeDispatcher } from './themeContext'; // Importamos el hook que devuelve el tema

const ContentCard: React.FC = () => {
  // 1. Obtener el tema actual
  const { theme } = useThemeDispatcher();

  // 2. Definir los colores base según el tema
  // Esta es la parte clave para reemplazar las clases de CSS/Tailwind
  const cardColors = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333333',
    textColor: theme === 'light' ? '#000000' : '#ffffff',
    borderColor: theme === 'light' ? '#ccc' : '#555',
    boxShadowColor: theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
  };

  // 3. Estilos en línea aplicados al componente
  const cardStyles: React.CSSProperties = {
    padding: '20px',
    marginTop: '20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
    
    // Aplicamos los colores condicionales:
    backgroundColor: cardColors.backgroundColor,
    color: cardColors.textColor,
    border: `1px solid ${cardColors.borderColor}`,
    boxShadow: `0 4px 8px ${cardColors.boxShadowColor}`,
  };

  return (
    <div style={cardStyles}>
      <h3>Título de la Tarjeta</h3>
      <p>
        El tema actual es **{theme}**. Los estilos de esta tarjeta se aplican directamente
        en el código JSX usando el valor que viene de `useThemeDispatcher`.
      </p>
    </div>
  );
};

export default ContentCard;