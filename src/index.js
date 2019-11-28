import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4200FF',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>,
  document.getElementById('root')
  );

serviceWorker.unregister();
