import React, { useEffect } from "react"
import { navigate } from "gatsby"

import Header from "../components/Header"
import Layout from "../components/Layout"
import {
  Confidential,
  DocumentHeader,
  Icon,
  Address,
  Redacted,
} from "../components/about-me/styled"

export default function () {
  useEffect(() => {
    navigate("#start")
  }, [])
  return (
    <Layout>
      <Header />
      <Confidential id="start">
        <DocumentHeader>
          <Icon src="/images/stamp.png" />
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
    </Layout>
  )
}
