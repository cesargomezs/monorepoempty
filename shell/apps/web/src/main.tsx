import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './components/themeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
    <App/>
    </Provider>
    </ThemeProvider>
  </StrictMode>
);