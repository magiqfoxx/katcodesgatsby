import React from "react"
import { ThemeProvider } from "./src/common/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
