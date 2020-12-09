import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import Input from "./Input"
import Background from "./Background"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: center;
`
const Terminal = styled.div`
  background-color: black;
  height: 20rem;
  z-index: 10;
  width: 30rem;
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: center;
`

const Header = () => {
  const [command, setCommand] = useState("")

  // useEffect(() => {
  //   console.log(command)
  //   if (command.startsWith("cd")) {
  //     let page = command.slice(3)
  //     navigate(`/${page}/`)
  //     //ls
  //     //help
  //   }
  // }, [command])
  const onSubmit = e => {
    e.preventDefault()
    console.log(command)
    if (command.startsWith("cd")) {
      let page = command.slice(3)
      navigate(`/${page}/#start`)
      //ls
      //help
    }
  }
  return (
    <StyledHeader>
      <Background />
      <Terminal>
        <form onSubmit={onSubmit}>
          <Input value={command} onChange={e => setCommand(e.target.value)} />
        </form>
      </Terminal>
    </StyledHeader>
  )
}

export default Header
