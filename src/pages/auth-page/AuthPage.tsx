import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material'
import { PreviewContent } from './components/preview-content/PreviewContent'
import { FormContent } from './components/form-content/FormContent'

export const AuthPage = () => {
  const theme = useTheme()

  return (
    <div>
      <Container maxWidth={false} disableGutters>
        <Grid
          sx={{ height: '100vh', justifyContent: 'center', backgroundColor: 'red', alignItems: 'center' }}
          container
        >
          <PreviewContent {...{ theme }} />
          <FormContent />
        </Grid>
      </Container>
    </div>
  )
}
