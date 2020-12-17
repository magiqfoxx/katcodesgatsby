import styled from "styled-components"

export const Wrapper = styled.div`
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
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
`
export const Image = styled.img`
  margin: 3rem 0;
`
export const Button = styled.button`
  font-size: 2rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  border-style: outset;
  border-radius: 5px;
  border-width: 5px;
`
export const Text = styled.p`
  margin: 2rem 0;
  font-size: 1.5rem;
`
export const Pictures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  justify-items: center;
  grid-gap: 3rem;
`
export const Picture = styled.img`
  width: 200px;
  cursor: pointer;
`
export const Link = styled.a`
  color: var(--color-text);
  text-decoration: underline;
  margin: 2rem 0;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  display: ${props => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  padding: 4rem;
  cursor: pointer;
`
export const Photo = styled.img`
  height: 100%;
`
