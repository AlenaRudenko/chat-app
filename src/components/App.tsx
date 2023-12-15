import { useEffect, useState } from 'react'
import './style.scss'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

export const App = () => {
  return (
    <div>
      <CssBaseline />
      <Outlet />
    </div>
  )
}
