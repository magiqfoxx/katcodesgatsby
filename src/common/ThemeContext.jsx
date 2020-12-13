import React, { useState, useEffect } from "react"

import themes from "../common/themes"

const ThemeContext = React.createContext({
  theme: themes.light,
  setTheme: () => {},
  name: "light",
})

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true
export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light")
  useEffect(() => {
    supportsDarkMode && setThemeName("dark")
  }, [])
  return (
    <ThemeContext.Provider
      value={{
        name: themeName,
        theme: themes[themeName],
        setTheme: setThemeName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
