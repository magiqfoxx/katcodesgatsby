import React, { useState, useEffect } from "react"

import themes from "../common/themes"

const ThemeContext = React.createContext({
  theme: themes.light,
  setTheme: () => {},
})

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    supportsDarkMode && setTheme("dark")
  }, [])
  return (
    <ThemeContext.Provider value={{ theme: themes[theme], setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
