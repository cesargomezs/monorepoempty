import React, { useReducer, useEffect, createContext, useContext, ReactNode } from 'react';

// Tipos
type Theme = 'light' | 'dark';
type ActionType = { type: 'TOGGLE_THEME' };

interface ThemeState {
  theme: Theme;
}

interface ThemeContextProps extends ThemeState {
  dispatch: React.Dispatch<ActionType>; // Exportamos el dispatch
}

// 1. Reducer
const themeReducer = (state: ThemeState, action: ActionType): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

// 2. Función para obtener el estado inicial
const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme) return storedTheme;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

// 3. Crear el Contexto
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// 4. Hook personalizado para usar el contexto y obtener el dispatch
export const useThemeDispatcher = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeDispatcher debe ser usado dentro de un ThemeProvider');
  }
  return { theme: context.theme, dispatch: context.dispatch };
};

// 5. Proveedor del Contexto (ThemeProvider)
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: getInitialTheme() });

// Reemplaza document.getElementById('root') o document.body con document.documentElement
useEffect(() => {
    // Aplica la clase al elemento <html>
    const htmlElement = document.documentElement; 
    
    htmlElement.classList.remove('light', 'dark');
    // Tailwind usa la clase 'dark' para activar los estilos de modo oscuro.
    if (state.theme === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        // Opcional: añade 'light' si también lo usas como selector base
        htmlElement.classList.add('light'); 
    }
    
    localStorage.setItem('theme', state.theme);
}, [state.theme]);

  const contextValue = { theme: state.theme, dispatch };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};