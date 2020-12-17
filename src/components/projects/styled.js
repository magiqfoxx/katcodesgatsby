import styled from "styled-components"

export const Classified = styled.div`
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
  * {
    font-family: "Courier New", Courier, monospace !important;
  }
  p {
    margin: 1rem 0;
    width: 100%;
  }
  img {
    height: 200px;
  }
  table {
    margin: 2rem 0;
    width: 80vw;
  }
  td {
    border: 1px solid black;
    padding: 3rem;
    vertical-align: top;
    li {
      list-style: circle;
    }
  }
`
export const Title = styled.h1`
  background-color: black;
  color: white;
  margin: 2rem 0;
  font-size: 2.5rem;
  padding: 0.5rem 1rem;
`
export const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  padding: 1rem;
  text-transform: uppercase;
  text-decoration: undeline;
`
export const Stack = styled.p``
export const Link = styled.a`
  display: block;
  text-decoration: underline;
  color: var(--color-primary);
`
