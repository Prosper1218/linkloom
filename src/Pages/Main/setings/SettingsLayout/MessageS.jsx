import React from 'react'
import { UseTheme } from '../../../../Utils/ThemeContext'

const MessageS = () => {
  const {theme} =UseTheme()
  return (
    <div style={{color:theme === "dark" ? "white" : "black"}}>Message settings</div>
  )
}

export default MessageS