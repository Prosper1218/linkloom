import React from 'react'
import { UseTheme } from '../../../../Utils/ThemeContext'

const AccountS = () => {
  const {theme} =UseTheme()
  return (
    <div style={{color:theme === "dark" ? "white" : "black"}}>Account settings</div>
  )
}

export default AccountS