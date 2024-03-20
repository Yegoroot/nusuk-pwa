import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import componentsOverride from './overrides'

// A custom theme for this app
const theme = createTheme({
  
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b714e',
    },
    text: {
      primary: '#fff',
      secondary: '#61656b'
    },
    divider: '#444444',
    secondary: {
      "100": '#28292b',
      "400": '#1b1d21',
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

theme.components = componentsOverride(theme)

export default theme;