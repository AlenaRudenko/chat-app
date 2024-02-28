import Typography from '@mui/material/Typography'
import logo from '../../assets/logo.png'
import classes from './Logo.module.scss'
import { Box } from '@mui/material'

export const Logo = () => {
  return (
    <Box className={classes.box}>
      <img alt='' height='40px' src={logo} width='40px' />
      <Typography ml={3} variant='h1'>
        Chat App
      </Typography>
    </Box>
  )
}
