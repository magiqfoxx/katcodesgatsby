import React from "react"
import styled from "styled-components"

import Terminal from "./Terminal"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: center;
`

const Header = () => {
  return (
    <StyledHeader>
      <Terminal />
    </StyledHeader>
  )
}

export default Header
