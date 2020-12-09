import React from "react"

import Background from "../components/Background"
import Layout from "../components/Layout"
import Data from "../components/Data"
import Container from "../components/Container"

export default function Home() {
  return (
    <Container>
      <Layout />
      <Background />
      <Data>Stella</Data>
    </Container>
  )
}
