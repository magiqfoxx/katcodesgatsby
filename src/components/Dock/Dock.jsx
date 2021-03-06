import React from "react"

import {
  StyledDock,
  Background,
  Mail,
  Github,
  Terminal,
  DockItemWrapper,
  ActiveDot,
} from "./styled"

const Dock = () => {
  return (
    <>
      <StyledDock>
        <Background />
        <a href="mailto:kat.zemsta@wp.pl">
          <Mail src="/images/mail.png" alt="mail" />
        </a>
        <a href="https://github.com/magiqfoxx">
          <Github src="/images/github.png" alt="github" />
        </a>
        <DockItemWrapper>
          <Terminal src="/images/terminal.png" alt="terminal" />
          <ActiveDot />
        </DockItemWrapper>
      </StyledDock>
    </>
  )
}

export default Dock
