import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContextProvider from './context/ContextProvider';
import { BrowserRouter} from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ffffff',
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


  <ThemeProvider theme={theme}>

    <ContextProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider>
    
  </ThemeProvider>
);


