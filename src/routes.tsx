import { App } from './components/App'

import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/auth',
        element: <div>login or sign up</div>,
      },
    ],
  },
])
