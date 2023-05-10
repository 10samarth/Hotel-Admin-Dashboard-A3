import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
