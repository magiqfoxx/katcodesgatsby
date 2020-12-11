import React from "react"

import { StyledDock, Background, Mail, Github } from "./styled"

const Dock = () => {
  return (
    <>
      <StyledDock>
        <Background />
        <a href="mailto:kat.zemsta@wp.pl">
          <Mail src="/mail.png" alt="mail" />
        </a>
        <a href="https://github.com/magiqfoxx">
          <Github src="/github.png" alt="github" />
        </a>
      </StyledDock>
    </>
  )
}

export default Dock
