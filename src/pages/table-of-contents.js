import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"

export default function TableOfContents() {
  return (
    <Layout>
      <Header
        message={
          <ul>
            <li>about-me</li>
            <li>projects</li>
            <li>stella</li>
          </ul>
        }
      />
    </Layout>
  )
}
