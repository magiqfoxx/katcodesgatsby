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
  }
  td {
    border: 1px solid black;
    padding: 1rem;
  }
`
export const Title = styled.div`
  background-color: black;
  color: white;
  margin: 2rem 0;
  font-size: 2.5rem;
  padding: 0.5rem 1rem;
`
