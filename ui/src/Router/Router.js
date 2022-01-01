import { Box } from '@chakra-ui/react'
import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from '../Core/Header/Header'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import { ROUTES } from './routes'

const AuthRouter = () => {
  return (
    <Box minHeight="100vh" color="white">
      <Header />
      <Routes>
        <Route path={ROUTES.dashboard.path} element={<></>} />
        <Route path="/" element={<Navigate to={ROUTES.dashboard.path} />} />
      </Routes>
    </Box>
  )
}

const PublicRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.register.path} element={<Register />} />
      <Route path={ROUTES.login.path} element={<Login />} />
      <Route path="/" element={<Navigate to={ROUTES.login.path} />} />
    </Routes>
  )
}

export const Router = ({ isAuthenticated }) => {
  return isAuthenticated ? <AuthRouter /> : <PublicRouter />
}
