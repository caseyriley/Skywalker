import React from 'react';

const UserGallerySizeSelect = (props) => {
  return (
    <div id={"potd-image-size-select"}>
      <div className={`${props.userGalleryImageSizeState === 1 ? "sml" : ""} ${props.userGalleryImageSizeState === 2 ? "med" : ""} ${props.userGalleryImageSizeState === 3 ? "potd-select-lrg" : ""} ${props.userGalleryImageSizeState === 4 ? "potd-select-full" : "b"}`} id={`potd-image-size-switch__switch`}></div>
      <span className={`potd-size-switch__switch__span-3 ${props.userGalleryImageSizeState === 3 ? "invisible" : "visible"}`} onClick={() => props.setUserGalleryImageSizeState(3)} >fit to screen</span>
      <span className={`potd-size-switch__switch__span-4 ${props.userGalleryImageSizeState === 4 ? "invisible" : "visible"}`} onClick={() => props.setUserGalleryImageSizeState(4)} >full size</span>
    </div>
  )
}
export default UserGallerySizeSelect;