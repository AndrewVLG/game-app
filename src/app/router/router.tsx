import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../../pages/Layout'
import { RememberCards } from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'remember-cards',
        element: <RememberCards />,
      },
      {
        path: 'words',
        element: <h1>Words</h1>,
      },
    ],
  },
])
