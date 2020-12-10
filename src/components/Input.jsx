import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

const Label = styled.label`
  color: rgb(40, 212, 17);
  font-family: sans-serif;
  font-size: 12px;
`

const InputWrapper = styled.div`
  position: relative;
  display: inline;
`
const Cursor = styled.div`
  height: 12px;
  width: 6px;

  background-color: ${props =>
    props.focused ? "rgb(40, 212, 17)" : "transparent"};
  border: 1px solid rgb(40, 212, 17);
  position: absolute;
  left: 0;
  top: 0;
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
  color: rgb(40, 212, 17);
  :focus {
    outline: none;
  }
`

const Input = ({ value, onChange }) => {
  const textInput = useRef(null)
  const [focused, setFocused] = useState(
    document.activeElement === textInput.current
  )

  useEffect(() => {
    textInput.current.focus()
    setFocused(true)
  }, [])
  return (
    <>
      <Label htmlFor="terminal">Is-that-me-or-was-that-you:~ guest$</Label>
      <InputWrapper>
        <Cursor focused={focused} />
        <StyledInput
          name="terminal"
          id="terminal"
          value={value}
          onChange={onChange}
          onClick={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          ref={textInput}
        />
      </InputWrapper>
    </>
  )
}

export default Input
