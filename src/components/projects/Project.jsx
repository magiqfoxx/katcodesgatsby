import React from "react"

const Project = ({ img, title, technologies, url, description }) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td rowSpan="3">
            <img src={img} alt="" />
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
      </tbody>
    </table>
  )
}

export default Project
