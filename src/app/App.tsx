import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { AppTheme } from './appTheme'
import { router } from './router/router'
import { store } from './redux/store'

export const App = () => {
  return (
    <AppTheme>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppTheme>
  )
}
