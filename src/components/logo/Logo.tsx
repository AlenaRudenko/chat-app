import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import logo from '../../assets/logo.png'

export const Logo = () => {
  return (
    <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img alt='' height='40px' src={logo} width='40px' />
      <Typography ml={3} variant='h1'>
        Chat App
      </Typography>
    </Container>
  )
}
