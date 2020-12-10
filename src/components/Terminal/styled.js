import styled from "styled-components"

export const Window = styled.div`
  width: 400px;
  height: 300px;
  background-color: black;
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
`
export const Button = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
`
export const Off = styled(Button)`
  background-color: rgb(251, 73, 72);
`
export const Hide = styled(Button)`
  background-color: rgb(253, 183, 36);
`
export const Resize = styled(Button)`
  background-color: rgb(41, 195, 50);
`
export const Title = styled.span``
export const Image = styled.img``
export const TitleText = styled.span`
  font-family: sans-serif;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
  font-size: 12px;
  color: rgb(40, 212, 17);
  font-family: sans-serif;
  cursor: text;
`
export const Text = styled.p`
  margin: 1px 0;
`
