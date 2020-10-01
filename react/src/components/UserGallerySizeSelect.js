import React from 'react';
import UserModalSizeSelect from './UserModalSizeSelect';

const UserGallerySizeSelect = (props) => {

  return (
    <>  
      {props.userModalopenCloseState? <UserModalSizeSelect setUserModalImageSizeState={props.setUserModalImageSizeState} userModalImageSizeState={props.userModalImageSizeState}  
      /> :
        <div id={"main-c__bottom-nav-top__image-size-switch"}>
          <div className={`${props.userGalleryImageSizeState === 1 ? "sml" : ""} ${props.userGalleryImageSizeState === 2 ? "med" : ""} ${props.userGalleryImageSizeState === 3 ? "lrg" : ""} ${props.userGalleryImageSizeState === 4 ? "full" : "b"}`} id={`image-size-switch__switch`}></div>
          <span className={`size-switch__switch__span-1 ${props.userGalleryImageSizeState === 1 ? "invisible" : "visible"}`} onClick={() => props.setUserGalleryImageSizeState(1)} >small</span>
          <span className={`size-switch__switch__span-2 ${props.userGalleryImageSizeState === 2 ? "invisible" : "visible"}`} onClick={() => props.setUserGalleryImageSizeState(2)} >medium</span>
          <span className={`size-switch__switch__span-3 ${props.userGalleryImageSizeState === 3 ? "invisible" : "visible"}`} onClick={() => props.setUserGalleryImageSizeState(3)} >large </span>
          <span className={`size-switch__switch__span-4 ${props.userGalleryImageSizeState === 4 ? "invisible" : "visible"}`} onClick={() => props.setUserGalleryImageSizeState(4)} >full size</span>
        </div>   
      }
    </>
  )
}
export default UserGallerySizeSelect;