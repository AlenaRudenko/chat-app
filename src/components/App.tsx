import { useEffect, useState } from 'react'
import './style.scss'
import { Outlet, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
