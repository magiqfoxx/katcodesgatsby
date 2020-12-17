import React from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"

export default function () {
  return (
    <Layout>
      <Header
        message={
          <>
            <p>
              GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin17)
              <br />
              These shell commands are defined internally. Type `help' to see
              this list.
              <br />
              A star (*) next to a name means that the command is disabled.
              <br />
            </p>

            <ul>
              <li>cd [-L|-P] [dir]</li>
              <li>ls pwd [-LP]</li>
              <li>clear</li>
              <li>mkdir* [-pv] [-m mode] directory</li>
              <li>touch* [-f | -i] [-dPRrvW] file ...</li>
              <li>rm* [-f | -i] [-dPRrvW] file ...</li>
              <li>mv* [-f | -i] [-dPRrvW] file ...</li>
              <li>touch* [-f | -i] [-dPRrvW] file ...</li>
              <li>open* [-f | -i] [-dPRrvW] file ...</li>
            </ul>
          </>
        }
      />
    </Layout>
  )
}
