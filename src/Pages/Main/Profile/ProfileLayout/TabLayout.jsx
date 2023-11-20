import React from 'react'
import { Outlet } from 'react-router'

const PLayout = () => {
  return (
    <div>
     nav
     <Outlet/>
    </div>
  )
}

export default PLayout