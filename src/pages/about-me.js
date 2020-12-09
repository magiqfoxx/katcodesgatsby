import React from "react"
import styled from "styled-components"

import Background from "../components/Background"
import Layout from "../components/Layout"
import Data from "../components/Data"
import Container from "../components/Container"

const Confidential = styled.div`
  position: absolute;
  top: 100vh;
  padding: 4rem;
  background-color: white;
  display: flex;
  flex-direction: flex;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-image: url(./paper.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  * {
    font-family: "Courier New", Courier, monospace !important;
  }
  p {
    margin: 1rem 0;
    width: 100%;
  }
`
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-bottom: 6rem;
  background-image: url(./confidential.webp);
  background-repeat: no-repeat;
  background-size: contain;
`
const Icon = styled.img`
  width: 70px;
`
const Address = styled.p`
  text-align: right;
`
const Redacted = styled.span`
  color: black;
  background-color: black;
  position: relative;
  border-radius: 2px;
  ::before {
    content: "";
    border-radius: 2px;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: list-item;
    list-style: inside;
  }
`

export default function Home() {
  return (
    <Container id="about-me">
      <Layout />
      <Background />
      <Confidential>
        <Header>
          <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/United_States_Department_of_Defense_Seal.svg/1200px-United_States_Department_of_Defense_Seal.svg.png" />
          <Address>
            December 9, annus horribilis
            <br />
            Krakow
          </Address>
        </Header>
        <p>Hi, I'm Kat</p>
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
      </Confidential>
    </Container>
  )
}
