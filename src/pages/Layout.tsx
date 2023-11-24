import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Alert, Snackbar, SnackbarOrigin } from '@mui/material'

import { useAppSelector } from '../app/redux/store'
import { selectIsWin } from '../app/redux/cardsSlice/selectors'
import { Header } from '../components'

const anchorOrigin: SnackbarOrigin = { horizontal: 'center', vertical: 'top' }
const alertStyle = { width: '100%' }

export const Layout = () => {
  const { pathname } = useLocation()
  const isWin = useAppSelector(selectIsWin)
  const redirect = pathname.length < 2 && <Navigate to="remember-cards" />
  return (
    <>
      <Snackbar open={isWin} anchorOrigin={anchorOrigin}>
        <Alert severity="success" sx={alertStyle}>
          Вы выиграли!
        </Alert>
      </Snackbar>
      {redirect}
      <Header />
      <Outlet />
    </>
  )
}
