import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"

export default function () {
  return (
    <Layout>
      <Header message={<span>Not Authorized</span>} />
    </Layout>
  )
}
