import React from 'react'
import HomePage from './pages/HomePage'
import LoginForm from './components/RegisterForm'
import AuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar'

const RootLayout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default RootLayout
