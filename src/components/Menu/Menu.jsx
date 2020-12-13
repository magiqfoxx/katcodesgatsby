import React, { useState } from "react"

import {
  StyledMenu,
  Apple,
  Title,
  ChooseTheme,
  Dropdown,
  ItemDropdown,
  Item,
  Button,
} from "./styled"

const Menu = ({ setTheme, theme, themeName }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledMenu>
        <Apple src="/apple.svg" alt="apple" />
        <Title>Terminal</Title>
        <Dropdown onBlur={() => setOpen(true)}>
          <ChooseTheme open={open} onClick={() => setOpen(true)}>
            Choose theme
          </ChooseTheme>
          {open && (
            <ItemDropdown>
              <Item selected={themeName === "dark"}>
                <Button onClick={() => setTheme("dark")}>Dark</Button>
              </Item>
              <Item selected={themeName === "light"}>
                <Button onClick={() => setTheme("light")}>Light</Button>
              </Item>
            </ItemDropdown>
          )}
        </Dropdown>
      </StyledMenu>
    </>
  )
}

export default Menu
