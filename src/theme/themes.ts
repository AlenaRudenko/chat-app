import createTheme from '@mui/material/styles/createTheme'

export const lightTheme = createTheme({
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
    h2: {
      fontFamily: 'Jost',
    },
    h3: {
      fontFamily: 'Jost',
    },
    h4: {
      fontFamily: 'Jost',
    },
    h1: {
      fontFamily: 'Jost',
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

          color: 'white',
          '&:hover': {
            backgroundColor: '#e68e5b',
            boxShadow: 'none',
          },
        },
      },
    },
  },
})
export const darkTheme = createTheme({
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
    h2: {
      fontFamily: 'Jost',
    },
    h3: {
      fontFamily: 'Jost',
    },
    h4: {
      fontFamily: 'Jost',
    },
    h1: {
      fontFamily: 'Jost',
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
          backgroundColor: '#e68e5b',
          color: 'white',
          '&:hover': {
            backgroundColor: '#FFBE98',
            boxShadow: 'none',
          },
        },
      },
    },
  },
})
