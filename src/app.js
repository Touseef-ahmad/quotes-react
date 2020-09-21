import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedViewQuotes } from './pages/view-quotes';
import { store } from './store';
// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

const lightTheme = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  background: `linear-gradient(0deg, rgb(136, 216, 176, 0.7), rgba(124, 223, 221, 0.8)),
    url('https://i.ytimg.com/vi/FAKW2lh9r_4/maxresdefault.jpg')`,
  color: 'black',
};
const darkTheme = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  background: `linear-gradient(0deg, rgb(0, 0, 50, 0.7), rgba(25, 50, 100, 0.8)),
    url('https://i.ytimg.com/vi/FAKW2lh9r_4/maxresdefault.jpg')`,
  color: 'white',
};
class App extends React.Component {
  state = {
    darkThemeChecked: false,
  };

  handleClick = () => {
    this.setState(state => ({ darkThemeChecked: !state.darkThemeChecked }));
  };

  render() {
    const { darkThemeChecked } = this.state;
    return (
      <Provider store={store}>
        <ThemeProvider theme={darkThemeChecked ? darkTheme : lightTheme}>
          <button className='btn btn-primary' type='button' onClick={this.handleClick}>
            Change theme
          </button>
          <ConnectedViewQuotes />
        </ThemeProvider>
      </Provider>
    );
  }
}

export { App };
