import React from "react"

import { Overlay, Photo } from "./styled"

const PhotoViewer = ({ picture, onOverlay, isOpen }) => {
  return (
    <Overlay onClick={onOverlay} isOpen={isOpen}>
      <Photo src={picture} />
    </Overlay>
  )
}

export default PhotoViewer
