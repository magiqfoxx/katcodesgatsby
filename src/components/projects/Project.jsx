import React from "react"

const Project = ({ img, title, technologies, url, description }) => {
  return (
    <table>
      <tr>
        <td rowspan="3">
          <img src={img} />
        </td>
        <td>Title:</td>
        <td>{title}</td>
      </tr>
      <tr>
        <td>Technologies: </td>
        <td>{technologies}</td>
      </tr>
      <tr>
        <td>Live:</td>
        <td>
          <a href={url}>{url}</a>{" "}
        </td>
      </tr>
      <tr>
        <td colSpan="3">{description}</td>
      </tr>
    </table>
  )
}

export default Project
