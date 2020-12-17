import styled from "styled-components"

export const Confidential = styled.div`
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
  background-image: url("/images/paper.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  * {
    font-family: "Courier New", Courier, monospace !important;
  }
  p {
    margin: 1rem 0;
    width: 100%;
  }
`
export const DocumentHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-bottom: 6rem;
  background-image: url("/images/confidential.webp");
  background-repeat: no-repeat;
  background-size: contain;
`
export const Icon = styled.img`
  width: 70px;
`
export const Address = styled.p`
  text-align: right;
`
export const Redacted = styled.span`
  color: black;
  background-color: black;
  position: relative;
  border-radius: 2px;
  ::before {
    content: "";
    border-radius: 2px;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: list-item;
    list-style: inside;
  }
`
