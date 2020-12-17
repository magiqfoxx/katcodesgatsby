import React, { useState, useRef, useEffect } from "react"

import {
  Window,
  TitleBar,
  Buttons,
  Off,
  Hide,
  Resize,
  Title,
  Image,
  TitleText,
  Content,
  Text,
  StyledInput,
  Label,
  Command,
} from "./styled"
import { runCommand } from "../../helpers/navigation"

const Terminal = ({ message }) => {
  const textInput = useRef(null)
  const [command, setCommand] = useState("")
  const [focused, setFocused] = useState(true)

  const onFocus = () => {
    textInput.current.focus()
    setFocused(true)
  }
  const onBlur = () => {
    console.log("blur")
    textInput.current.blur()
    setFocused(false)
  }

  useEffect(() => {
    onFocus()
  }, [])

  const onSubmit = e => {
    e.preventDefault()
    runCommand(command)
  }
  return (
    <Window onClick={onFocus}>
      <TitleBar>
        <Buttons>
          <Off>
            <img src="/quit.svg" alt="quit" />
          </Off>
          <Hide>
            <img src="/minimize.svg" alt="hide" />
          </Hide>
          <Resize>
            <img src="/resize.svg" alt="resize" />
          </Resize>
        </Buttons>
        <Title>
          <Image src="/drive.png" alt="hard drive" />
          <TitleText>Kat's mac - bash - 80 x 24</TitleText>
        </Title>
      </TitleBar>
      <Content>
        <Text>Last login: Thu Dec 10 21:41:33 on ttys001</Text>
        <form onSubmit={onSubmit}>
          <Label htmlFor="terminal" data-value={command}>
            Is-that-me-or-was-that-you:~ guest$
          </Label>
          <Command>{command}</Command>
          <StyledInput
            name="terminal"
            id="terminal"
            value={command}
            focused={focused}
            onChange={e => setCommand(e.target.value)}
            ref={textInput}
            role="input"
          />
        </form>
        {message}
      </Content>
    </Window>
  )
}

export default Terminal
