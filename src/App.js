import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Context from './Context';
import {grey,lightBlue} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[800],
      light:  lightBlue[50],
      dark: lightBlue[500]
    }, secondary: {
      main: grey[50],
      light: grey[50],
      dark: grey[800]
    }, third: {
      main: grey[900]
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ]
  }
});

export default function App(){
  return(
  <MuiThemeProvider theme= {theme}>
    <Context />
  </MuiThemeProvider>
  )
}