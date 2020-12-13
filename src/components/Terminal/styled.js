import styled from "styled-components"

export const Window = styled.div`
  width: 400px;
  height: 300px;
  background-color: var(--color-background);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgb(156, 156, 156);
  box-shadow: 7px 8px 14px 0px #00000059;
`
export const TitleBar = styled.div`
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(244, 244, 244);
  border-bottom: rgb(107, 107, 107);
  height: 22px;
  position: relative;
`
export const Buttons = styled.div`
  display: flex;
  margin-left: 8px;
  position: absolute;
  left: 0;
  img {
    position: relative;
    width: 8px;
    height: 8px;
    left: 2px;
    top: -4px;
  }
`
export const Button = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  cursor: pointer;
  :not(:first-child) {
    margin-left: 8px;
  }
  img {
    display: none;
  }
  :hover {
    img {
      display: inline;
    }
  }
`
export const Off = styled(Button)`
  background-color: rgb(251, 73, 72);
  :active {
    background-color: rgb(223, 53, 52);
  }
`
export const Hide = styled(Button)`
  background-color: rgb(253, 183, 36);
  :active {
    background-color: rgb(241, 167, 12);
  }
`
export const Resize = styled(Button)`
  background-color: rgb(41, 195, 50);
  :active {
    background-color: rgb(19, 171, 28);
  }
`
export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 15px;
`
export const TitleText = styled.span`
  font-family: sans-serif;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
  font-size: 12px;
  color: var(--color-text);
  font-family: sans-serif;
  cursor: text;
  p {
    line-height: 14px;
  }
`
export const Text = styled.p`
  margin: 1px 0;
`

export const Label = styled.label`
  color: var(--color-text);
  font-family: sans-serif;
  font-size: 12px;
  margin-right: 5px;
`

export const StyledInput = styled.input`
  background-color: #0000001a;
  color: var(--color-text);
  :focus {
    outline: none;
  }
  border: 1px solid var(--color-text);
  background-color: ${props =>
    props.focused ? "var(--color-text)" : "transparent"};
  width: 1px;
  animation: blink-animation 1s steps(5, start) infinite;
  @keyframes blink-animation {
    to {
      opacity: 0;
    }
  }
`
export const Command = styled.span`
  line-break: anywhere;
`
