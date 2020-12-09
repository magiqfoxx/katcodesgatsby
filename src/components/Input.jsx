import React from "react"
import styled from "styled-components"

const Label = styled.div`
  color: #8bc34a;
`

const InputWrapper = styled.div`
  position: relative;
`
const Cursor = styled.div`
  height: 1rem;
  width: 0.5rem;
  background-color: white;
  position: absolute;
  left: 0;
  animation: blink-animation 1s steps(5, start) infinite;

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
`
const StyledInput = styled.input`
  background-color: #0000001a;
  border: none;
  border-bottom: 1px solid #8bc34a;
  color: #8bc34a;
`

const Input = () => {
  return (
    <>
      <Label htmlFor="terminal">C:/Users/magiqfoxx:~</Label>
      <InputWrapper>
        <Cursor />
        <StyledInput name="terminal" id="terminal" />
      </InputWrapper>
    </>
  )
}

export default Input
