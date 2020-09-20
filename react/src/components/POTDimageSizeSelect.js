import React from 'react';

const POTDimageSizeSelect = (props) => {
  return (
    <div id={"potd-image-size-select"}>
      <div className={`${props.potdImageSizeState === 1 ? "sml" : ""} ${props.potdImageSizeState === 2 ? "med" : ""} ${props.potdImageSizeState === 3 ? "potd-select-lrg" : ""} ${props.potdImageSizeState === 4 ? "potd-select-full" : "b"}`} id={`potd-image-size-switch__switch`}></div>
      <span className={`potd-size-switch__switch__span-3 ${props.potdImageSizeState === 3 ? "invisible" : "visible"}`} onClick={() => props.setPotdImageSizeState(3)} >fit to screen</span>
      <span className={`potd-size-switch__switch__span-4 ${props.potdImageSizeState === 4 ? "invisible" : "visible"}`} onClick={() => props.setPotdImageSizeState(4)} >full size</span>
    </div>
  )
}
export default POTDimageSizeSelect;