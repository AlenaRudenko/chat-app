import { darkScrollbar } from '@mui/material'
import { grey } from '@mui/material/colors'
import createTheme from '@mui/material/styles/createTheme'
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes'

// eslint-disable-next-line prefer-const
let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFBE98',
      dark:'#f1f1f1'
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
      default:'linear-gradient(180deg, #076585,#92bbc9,#ffffff)',
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
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar({
            track: '#f1f1f1',
            thumb: grey[300],
            active: grey[400]
          }
      
        
        
          ),
          //scrollbarWidth for Firefox
          scrollbarWidth: "thin"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: 'Jost',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Jost',
          fontSize: 30,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Jost',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Jost',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
      },
    },
  },
})

// eslint-disable-next-line prefer-const
let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#282e33',
      dark:'#18191d'
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
      paper: '#282e33',
      default:'linear-gradient(180deg, #4c3a51,#b25068,#e7ab79)'
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
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar(undefined),
          //scrollbarWidth for Firefox
          scrollbarWidth: "thin"
        }
      }
    },
    MuiButton: {
      variants:[
        {
          props: { variant: 'text' },
          style: {
            textTransform: 'none',
            color: '#FFBE98',
        },}
      ],
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
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: 'Jost',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          
          fontFamily: 'Jost',
          fontSize: 30,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Jost',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Jost',
        },
      },
    },
    
  },
})
export const newDarkTheme = responsiveFontSizes(darkTheme)
export const newLightTheme = responsiveFontSizes(lightTheme)
