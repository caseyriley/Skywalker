import React from 'react';

const ImageModalSizeSelect = (props) => {
  return (
    <div id={"potd-image-size-select"}>
      <div className={`${props.modalImageSizeState === 1 ? "sml" : ""} ${props.modalImageSizeState === 2 ? "med" : ""} ${props.modalImageSizeState === 3 ? "potd-select-lrg" : ""} ${props.modalImageSizeState === 4 ? "potd-select-full" : "b"}`} id={`potd-image-size-switch__switch`}></div>
      <span className={`potd-size-switch__switch__span-3 ${props.modalImageSizeState === 3 ? "invisible" : "visible"}`} onClick={() => props.setModalImageSizeState(3)} >fit to screen</span>
      <span className={`potd-size-switch__switch__span-4 ${props.modalImageSizeState === 4 ? "invisible" : "visible"}`} onClick={() => props.setModalImageSizeState(4)} >full size</span>
    </div>
  )
}
export default ImageModalSizeSelect;