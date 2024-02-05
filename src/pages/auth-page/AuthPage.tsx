import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material'
import { PreviewContent } from './components/preview-content/PreviewContent'
import { FormContent } from './components/form-content/FormContent'
import { Await, Navigate, useLoaderData } from 'react-router-dom'
import { Suspense } from 'react'
import { LoadingPage } from '../../components/loading-page/LoadingPage'

export const AuthPage = () => {
  return (
    <div>
      <Container maxWidth={false} disableGutters>
        <Grid
          sx={{ height: '100vh', justifyContent: 'center', backgroundColor: 'red', alignItems: 'center' }}
          container
        >
          <PreviewContent />
          <FormContent />
        </Grid>
      </Container>
    </div>
  )
}
type Props = {
  userPromise: Promise<string>
}
export const AuthPageWrapper = () => {
  const user = useLoaderData()

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await
        children={<AuthPage />}
        errorElement={<Navigate to='/main' replace />}
        resolve={(user as Props).userPromise}
      />
    </Suspense>
  )
}
