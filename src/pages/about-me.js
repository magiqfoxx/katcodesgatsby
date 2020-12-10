import React from "react"

import Header from "../components/Header"
import Container from "../components/Container"
import {
  Confidential,
  DocumentHeader,
  Icon,
  Address,
  Redacted,
} from "../components/about-me/styled"

export default function Home() {
  return (
    <Container id="start">
      <Header />
      <Confidential>
        <DocumentHeader>
          <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/United_States_Department_of_Defense_Seal.svg/1200px-United_States_Department_of_Defense_Seal.svg.png" />
          <Address>
            December 9, annus horribilis
            <br />
            Krakow
          </Address>
        </DocumentHeader>
        <p>To whom it may concern</p>
        <Redacted as="p">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Redacted>
        <p>
          I'm a front end web developer specialising in{" "}
          <Redacted>There are</Redacted> React.
          <br />I spend my free time working on <Redacted>no</Redacted> amateur
          projects and learning new things. <br />
          At the office, I'm often seen engaging in lively debates, never far
          from the coffee machine.
        </p>
        <p>
          In my free time I like to <Redacted>hidden messages</Redacted> or
          read. I also spend a lot of time with my cat, Stella. She loves going
          for <Redacted>here</Redacted> walks and sunbathing.
          <Redacted>But go ahead and congratulate yourself. Good job.</Redacted>
        </p>
        <p>
          <Redacted>
            “What do you despise? By this are you truly known.”
          </Redacted>
        </p>
        <p>Love, Kat</p>
      </Confidential>
    </Container>
  )
}
