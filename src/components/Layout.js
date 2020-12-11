import React from "react"
import styled from "styled-components"

import GlobalStyle from "../common/GlobalStyle"

const Container = styled.div``
const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle theme="purple" />
      {children}
    </Container>
  )
}

export default Layout
