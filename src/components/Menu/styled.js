import styled from "styled-components"

export const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 22px;
  background: rgb(217 230 255 / 90%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
`
export const Apple = styled.img`
  width: 12px;
`
export const Title = styled.span`
  font-weight: 600;
  margin-left: 18px;
  font-size: 14px;
`
export const ChooseTheme = styled.button`
  background-color: ${({ open }) =>
    open ? "rgb(107,107,107)" : "transparent"};
  color: ${({ open }) => (open ? "white" : "black")};
  border: none;
  font-weight: 400;
  padding: 4px 8px;
  margin-left: 12px;
  cursor: pointer;
  :active {
    background-color: rgb(107, 107, 107);
    color: white;
  }
  :focus {
    outline: none;
  }
`
export const Dropdown = styled.div``
export const ItemDropdown = styled.ul`
  position: absolute;
  left: 115px;
  top: 22px;
  padding: 3px 0px;
  background: rgb(217 230 255 / 90%);
  min-width: 103px;
`
export const Item = styled.li`
  padding: 4px 12px;
  cursor: pointer;
  :hover {
    background-color: rgb(156, 156, 156);
    color: white;
  }
  ::before {
    content: "\u2713";
    opacity: ${props => (props.selected ? 1 : 0)};
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`
