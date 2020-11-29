import React from "react"

import GlobalStyle from "../common/GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme="purple" />
      {children}
    </>
  )
}

export default Layout
