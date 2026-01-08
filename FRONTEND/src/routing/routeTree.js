import { createRootRoute } from '@tanstack/react-router'
import RootLayout from '../RootLayout.jsx'
import { homeRoute } from './homepage.js'
import { authRoute } from './auth.route.js'
import { dashboardRoute } from './dashboard.js'


export const rootRoute = createRootRoute({ //this is the main componet jiske andar baaki routes aayenge
  component: RootLayout
});

export const routeTree = rootRoute.addChildren([
  homeRoute, 
  authRoute, 
  dashboardRoute]);
