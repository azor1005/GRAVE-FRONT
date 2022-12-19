import React from 'react'
import { Navigate } from 'react-router-dom'
import isAuthenticated from './auth';

export default function ProtectRoute({children}) {
  return isAuthenticated() ? children : <Navigate to="/Login" />
}