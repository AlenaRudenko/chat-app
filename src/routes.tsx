import { App } from './App'
import { Navigate, createBrowserRouter, defer } from 'react-router-dom'
import { AuthPageWrapper } from './pages/auth-page/AuthPage'
import { MainPageWrapper } from './pages/main-page/MainPage'
import { mainPageLoader } from './pages/main-page/mainPage.loader'
import { authPageLoader } from './pages/auth-page/authPage.loader'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to='/auth' replace />,
      },
      {
        path: '/auth',
        element: <AuthPageWrapper />,
        loader: () => defer({ userPromise: authPageLoader() }),
      },
      {
        path: '/main',
        element: <MainPageWrapper />,
        loader: () => defer({ userPromise: mainPageLoader() }),
      },
    ],
  },
])
