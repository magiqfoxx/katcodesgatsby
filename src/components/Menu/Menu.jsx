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

const Menu = ({ setTheme, theme }) => {
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
              <Item>
                {theme === "dark" && "\u2713"}
                <Button onClick={() => setTheme("dark")}>Dark</Button>
              </Item>
              <Item>
                {theme === "light" && "\u2713"}
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
