import styled from "styled-components"

export const StyledDock = styled.div`
  position: absolute;
  bottom: 8px;
  width: 80vw;
`
export const Background = styled.div`
  position: absolute;
  bottom: 0px;
  border-radius: 4px;
  width: 100%;
  background: #ffffff17;
  height: 32px;
  transform: perspective(400px) rotateX(45deg);

  box-shadow: inset 0px -18px 20px 0px #ffffffd1,
    0px 2px 0px 0px rgb(107 107 107 / 65%);
`
export const Image = styled.img`
  position: absolute;
  bottom: 10px;
  width: 50px;
  cursor: pointer;
`

export const Mail = styled(Image)``
export const Github = styled(Image)`
  left: 60px;
`
export const Terminal = styled(Image)`
  bottom: 0;
`
export const DockItemWrapper = styled.div`
  position: absolute;
  left: 120px;
  bottom: 10px;
  width: 50px;
  cursor: pointer;
`
export const ActiveDot = styled.div`
  height: 4px;
  width: 4px;
  background-color: rgb(30, 33, 39);
  border-radius: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`
