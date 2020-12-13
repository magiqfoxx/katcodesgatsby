import React from "react"
import styled from "styled-components"

import Terminal from "./Terminal"
import Dock from "./Dock"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background: url("/bg.jpg");
  background-size: cover;
`

const Header = ({ message }) => {
  return (
    <StyledHeader>
      <Terminal message={message} />
      <Dock />
    </StyledHeader>
  )
}

export default Header
