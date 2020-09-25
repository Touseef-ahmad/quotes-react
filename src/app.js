import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './styles';
import { ViewQuotesPage } from './pages/view-quotes';
import { store } from './store';
// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <ViewQuotesPage />
    </ThemeProvider>
  </Provider>
);
