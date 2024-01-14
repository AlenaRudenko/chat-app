import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { router } from './routes'
import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}

const container = createRoot(root)

container.render(
  <Provider store={store}>
    <RouterProvider router={router} />{' '}
  </Provider>,
)
