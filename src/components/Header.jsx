import React, { useState } from "react"
import styled from "styled-components"

import Terminal from "./Terminal"
import { runCommand } from "../helpers/navigation"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: center;
`
// const Terminal = styled.div`
//   background-color: black;
//   height: 20rem;
//   z-index: 10;
//   width: 30rem;
//   display: flex;
//   flex-direction: flex;
//   justify-content: center;
//   align-items: center;
// `

const Header = () => {
  const [command, setCommand] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    runCommand(command)
  }
  return (
    <StyledHeader>
      <Terminal />
      {/* <Terminal>
        <form onSubmit={onSubmit}>
          <Input value={command} onChange={e => setCommand(e.target.value)} />
        </form>
      </Terminal> */}
    </StyledHeader>
  )
}

export default Header
