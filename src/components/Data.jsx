import React from "react"
import styled from "styled-components"

const StyledData = styled.main`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  top: 100vh;
  min-height: 100vh;
  width: 100vw;
  background: black;
  padding: 4rem;
  * {
    font-family: "Courier New", Courier, monospace;
    color: white;
  }
  td {
    border: 1px solid white;
  }
`

const Data = ({ children }) => {
  //slides open
  return <StyledData>{children}</StyledData>
}

export default Data
