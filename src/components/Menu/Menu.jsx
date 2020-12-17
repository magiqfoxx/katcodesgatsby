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
  const selectTheme = (e, theme) => {
    setTheme(theme)
    setOpen(false)
    e.stopPropagation()
  }
  return (
    <>
      <StyledMenu>
        <Apple src="/images/apple.svg" alt="apple" />
        <Title>Terminal</Title>
        <Dropdown
          onBlur={e => {
            e.stopPropagation()
            // setOpen(false)
          }}
        >
          <ChooseTheme open={open} onClick={() => setOpen(!open)}>
            Choose theme
          </ChooseTheme>
          {open && (
            <ItemDropdown>
              <Item
                selected={themeName === "dark"}
                onClick={e => {
                  e.stopPropagation()
                  selectTheme(e, "dark")
                }}
              >
                <Button
                  onClick={e => {
                    e.stopPropagation()
                    selectTheme(e, "dark")
                  }}
                >
                  Dark
                </Button>
              </Item>
              <Item
                selected={themeName === "light"}
                onClick={e => {
                  e.stopPropagation()
                  selectTheme(e, "dark")
                }}
              >
                <Button
                  onClick={e => {
                    e.stopPropagation()
                    selectTheme(e, "light")
                  }}
                >
                  Light
                </Button>
              </Item>
            </ItemDropdown>
          )}
        </Dropdown>
      </StyledMenu>
    </>
  )
}

export default Menu
