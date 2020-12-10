import React from "react"

import Input from "../Input"
import {
  Window,
  TitleBar,
  Off,
  Hide,
  Resize,
  Title,
  Image,
  TitleText,
  Content,
  Text,
} from "./styled"

const Terminal = () => {
  return (
    <Window>
      <TitleBar>
        <div>
          <Off />
          <Hide />
          <Resize />
        </div>
        <Title>
          <Image src="" alt="hard drive" />
          <TitleText>Kat's mac - bash - 80 x 24</TitleText>
        </Title>
      </TitleBar>
      <Content>
        <Text>Last login: Thu Dec 10 21:41:33 on ttys001</Text>
        <Input />
      </Content>
    </Window>
  )
}

export default Terminal
