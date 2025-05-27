import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import { styles } from './ThemeStyle'

const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState("dark")
  const currentStyle = styles[theme]

  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentStyle }}>
      <>
        {children}
      </>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider