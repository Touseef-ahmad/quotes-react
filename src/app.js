import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedThemeProvider } from './compoents/theme-provider';
import { ConnectedViewQuotes } from './pages/view-quotes';
import { store } from './store';
// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => (
  <Provider store={store}>
    <ConnectedThemeProvider>
      <ConnectedViewQuotes />
    </ConnectedThemeProvider>
  </Provider>
);
