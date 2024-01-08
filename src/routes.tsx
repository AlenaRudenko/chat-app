import { App } from './components/App'

import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AuthPage } from './pages/auth-page/AuthPage'
import { MainPage } from './pages/main-page/MainPage'
import { ProtectedRoute } from './components/wrapped-component/WrappedComponent'

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
        element: (
          <ProtectedRoute>
            <AuthPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/main',
        element: (
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
