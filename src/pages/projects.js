import React from "react"

import Background from "../components/Background"
import Layout from "../components/Layout"
import Data from "../components/Data"
import Container from "../components/Container"
import SW from "../components/SW"

export default function Home() {
  return (
    <Container>
      <Layout />
      <Background />
      <Data>
        <h1 id="#projects">Projects</h1>
        <table>
          <tr>
            <td>Title</td>
          </tr>
          <tr>
            <td>Short description</td>
          </tr>
          <tr>
            <td>Photo</td>
          </tr>
          <tr>
            <td>Technologies</td>
          </tr>
          <tr>
            <td>Link</td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Title</td>
          </tr>
          <tr>
            <td>Short description</td>
          </tr>
          <tr>
            <td>Photo</td>
          </tr>
          <tr>
            <td>Technologies</td>
          </tr>
          <tr>
            <td>Link</td>
          </tr>
        </table>
      </Data>
    </Container>
  )
}
