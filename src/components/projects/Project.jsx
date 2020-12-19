import React from "react"

import { ProjectTitle, Stack, Link } from "./styled"

const Project = ({ img, title, technologies, url, github, description }) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <img src={img} alt="" />
          </td>
          <td>
            <ProjectTitle>{title}</ProjectTitle>
            <Link href={url}>Live</Link>
            <Link href={github}>Code</Link>
            <Stack>
              <ul>
                {technologies.map(t => {
                  return <li>{t}</li>
                })}
              </ul>
            </Stack>
          </td>
        </tr>
        <tr>
          <td colSpan="2">{description}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Project
