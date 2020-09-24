import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { propTypes } from './prop-types';

const CustomThemeProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

CustomThemeProvider.propTypes = propTypes;

const mapStateToProps = state => ({
  theme: state.themeReducer.theme,
});

export const ConnectedThemeProvider = connect(mapStateToProps)(CustomThemeProvider);
