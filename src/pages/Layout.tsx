import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header } from '../components'

export const Layout = () => {
  const { pathname } = useLocation()
  const redirect = pathname.length < 2 && <Navigate to="remember-cards" />
  return (
    <>
      {redirect}
      <Header />
      <Outlet />
    </>
  )
}
