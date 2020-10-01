import React from 'react';

const UserModalSizeSelect = (props) => {
  return (
    <div id={"potd-image-size-select"}>
      <div className={`${props.userModalImageSizeState === 1 ? "sml" : ""} ${props.userModalImageSizeState === 2 ? "med" : ""} ${props.userModalImageSizeState === 3 ? "potd-select-lrg" : ""} ${props.userModalImageSizeState === 4 ? "potd-select-full" : "b"}`} id={`user-image-size-switch__switch`}></div>
      <span className={`potd-size-switch__switch__span-3 ${props.userModalImageSizeState === 3 ? "invisible" : "visible"}`} onClick={() => props.setUserModalImageSizeState(3)} >fit to screen</span>
      <span className={`potd-size-switch__switch__span-4 ${props.userModalImageSizeState === 4 ? "invisible" : "visible"}`} onClick={() => props.setUserModalImageSizeState(4)} >full size</span>
    </div>
  )
}
export default UserModalSizeSelect;