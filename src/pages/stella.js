import React, { useState } from "react"

import Header from "../components/Header"
import Layout from "../components/Layout"
import PhotoViewer from "../components/Stella/PhotoViewer"

import {
  Wrapper,
  Title,
  Image,
  Button,
  Text,
  Pictures,
  Picture,
  Link,
} from "../components/Stella/styled"

export default function Stella() {
  const [picture, setPicture] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const viewPicture = picture => {
    setPicture(picture)
    setIsOpen(true)
  }
  return (
    <Layout>
      <Header />
      <Wrapper>
        <Title>Have you seen this cat?</Title>
        <Image src="/stella/1.jpg" alt="Close up of cat's face" />
        <Button onClick={() => alert("Good for you!")}>I have now</Button>
        <Text>
          Because she is freaking awesome!
          <br />
          She's not missing or anything.
          <br />I just thought you should see her.
        </Text>
        <Pictures>
          <Picture
            src="/stella/4.jpg"
            alt="Cat looking down at a dead green bug"
            onClick={() => viewPicture("/stella/4.jpg")}
          />
          <Picture
            src="/stella/5.jpg"
            alt="Cat chilling in the sun"
            onClick={() => viewPicture("/stella/5.jpg")}
          />
          <Picture
            src="/stella/2.jpg"
            alt="Cat dressed up in a jacket, ready for a walk"
            onClick={() => viewPicture("/stella/2.jpg")}
          />
          <Picture
            src="/stella/3.jpg"
            alt="Cat sitting on top of a fridge, resembles a gremlin"
            onClick={() => viewPicture("/stella/3.jpg")}
          />
        </Pictures>

        <Link href="https://instagram/stellaewunia">
          💕Support Stella on patreon💕
        </Link>
        <img
          src="/stella/6.jpg"
          alt="Closeup of a cat's face wearing reindeer costume"
        />
      </Wrapper>
      <PhotoViewer
        picture={picture}
        isOpen={isOpen}
        onOverlay={() => setIsOpen(false)}
      />
    </Layout>
  )
}
