import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom'
import './i18n/index'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from './store'
import { AlmaraiLight, AlmaraiRegular, AlmaraiBold, AlmaraiExtraBold } from './globalFonts'

const theme = createMuiTheme({
  language: {
    ara: {
      fontFamily: "'Almarai', sans-serif",
      color: 'red',
    }
  },
})

console.log(theme)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
