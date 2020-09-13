import React from 'react';

const ImageSizeSelect = (props) => {
  return (
    <div id={"main-c__bottom-nav-top__switch-c"}>
      <span id={"image-size-span"}>Image Size</span>
      <div id={"main-c__bottom-nav-top__image-size-switch"}>
        <div className={`${props.imageSizeState === 1 ? "sml" : ""} ${props.imageSizeState === 2 ? "med" : ""} ${props.imageSizeState === 3 ? "lrg" : ""} ${props.imageSizeState === 4 ? "full" : "b"}`} id={`image-size-switch__switch`}></div>
        <span className={`size-switch__switch__span-1 ${props.imageSizeState === 1 ? "invisible" : "visible"}`} onClick={() => props.setImageSizeState(1)} >sml</span>  
        <span className={`size-switch__switch__span-2 ${props.imageSizeState === 2 ? "invisible" : "visible"}`} onClick={() => props.setImageSizeState(2)} >med</span> 
        <span className={`size-switch__switch__span-3 ${props.imageSizeState === 3 ? "invisible" : "visible"}`} onClick={() => props.setImageSizeState(3)} >lrg</span> 
        <span className={`size-switch__switch__span-4 ${props.imageSizeState === 4 ? "invisible" : "visible"}`} onClick={() => props.setImageSizeState(4)} >full</span>
      </div>
    </div>
  )
}
export default ImageSizeSelect;