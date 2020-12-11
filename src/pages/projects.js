import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"
import projects from "../components/projects/projects"
import Project from "../components/projects/Project"
import { Classified, Title } from "../components/projects/styled"

export default function Home() {
  return (
    <Layout>
      <Header />
      <Classified>
        <Title id="start">Classified</Title>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </Classified>
    </Layout>
  )
}
