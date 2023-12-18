import createTheme from '@mui/material/styles/createTheme'
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes'

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFBE98',
    },
    secondary: {
      main: '#98cdff',
    },
    error: {
      main: '#FF9898',
    },
    warning: {
      main: '#F07041',
    },
    success: {
      main: '#7ACC7A',
    },
    info: {
      main: '#6788A5',
    },
    background: {
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Jost',
    h2: {
      fontFamily: 'Jost',
      fontSize: '2.2rem',
    },
    h3: {
      fontFamily: 'Jost',
      fontSize: '2.2rem',
    },
    h1: {
      fontFamily: 'Jost',
      fontSize: '3.2rem',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Roboto',
    },
    button: {
      fontFamily: 'Jost',
    },
    caption: {
      fontFamily: 'Jost',
    },
    overline: {
      fontFamily: 'Jost',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // color: 'white',
          // '&:hover': {
          //   backgroundColor: '#e68e5b',
          //   boxShadow: 'none',
          // },
        },
      },
    },
  },
})

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFBE98',
    },
    secondary: {
      main: '#6E7EAC',
    },
    error: {
      main: '#FF9898',
    },
    warning: {
      main: '#F07041',
    },
    success: {
      main: '#7ACC7A',
    },
    info: {
      main: '#6788A5',
    },
    background: {
      paper: '#5a5656',
    },
  },
  typography: {
    fontFamily: 'Jost',
    h2: {
      fontFamily: 'Jost',
      fontSize: '2.2rem',
    },
    h3: {
      fontFamily: 'Jost',
      fontSize: '2.2rem',
    },
    h1: {
      fontFamily: 'Jost',
      fontSize: '3.2rem',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Roboto',
    },
    button: {
      fontFamily: 'Jost',
    },
    caption: {
      fontFamily: 'Jost',
    },
    overline: {
      fontFamily: 'Jost',
    },
  },
  spacing: 8,
  direction: 'rtl',
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // color: 'white',
          // '&:hover': {
          //   backgroundColor: '#e68e5b',
          //   boxShadow: 'none',
          // },
        },
      },
    },
  },
})
export const newDarkTheme = responsiveFontSizes(darkTheme)
export const newLightTheme = responsiveFontSizes(lightTheme)