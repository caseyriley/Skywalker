import React from 'react';

const ProfileFullScreen = (props)=>{
  return(
    <div className={`profile-full-screen-c ${props.profileFullScreenState ? "visible" : "hidden"}`}>
      {/* <div className={"profile-full-screen"} ></div> */}
      <img className={"profile-full-screen"} alt="" src={props.user.profile_pic} ></img>
      <div className={"profile-full-screen-background"} onClick={props.fullscreenPic}></div>
    </div>
  )
}
export default ProfileFullScreen;