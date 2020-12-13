import React, { useContext } from "react"
import styled from "styled-components"

import GlobalStyle from "../common/GlobalStyle"
import ThemeContext from "../common/ThemeContext"
import Menu from "./Menu"

const Container = styled.div``
const Layout = ({ children }) => {
  const themeContext = useContext(ThemeContext)
  return (
    <Container>
      <GlobalStyle theme={themeContext.theme} />
      <Menu setTheme={themeContext.setTheme} theme={themeContext.theme} />
      {children}
    </Container>
  )
}

export default Layout
