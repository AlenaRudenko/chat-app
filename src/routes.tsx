import { App } from './components/App'

import { createBrowserRouter } from 'react-router-dom'
import { AuthPage } from './pages/auth-page/AuthPage'
import { MainPage } from './pages/main-page/MainPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/main',
        element: <MainPage />,
      },
    ],
  },
])
