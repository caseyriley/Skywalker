import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import LeftArrow from '../images/LeftArrow';
import ProfileFullScreen from './ProfileFullScreen';
import {API_URL} from '../config';

const token = window.localStorage.getItem("auth_token");

const ProfilePage = (props) => {


  const [tweetState, setTweetState] = useState([])

  const [profileUser, setProfileUser] = useState(2);
  useEffect(() => {
    // if (props.user.id === profileUser){
    setProfileUser(props.targetUser.id);
      const getUserTweets = async()=>{

        const response = await fetch(`${API_URL}/tweets/user/${profileUser}`,{
          method: "GET", 
          mode: "cors",
          headers: {"Authorizaion": `Bearer ${token}`}
        })
        if (!response.ok) {console.log("error in getUserTweets")}
        else{
          const json = await response.json();
          setTweetState(json);
        }
        
      }
    
      getUserTweets();
    // }
    
    
  }, [props])

  const [profileFullScreenState, setProfileFullScreenState] = useState(false);
  const fullscreenPic = () => {
    let toggleFullScreen = !profileFullScreenState
    setProfileFullScreenState(toggleFullScreen)
  }

  return (
    <>
      <ProfileFullScreen user={props.user} fullscreenPic={fullscreenPic} profileFullScreenState={profileFullScreenState} />
      <div id={"center-panel"}>
        <div id={"center-panel-tweet__nav"}>
          <div onClick={props.centerPanelHome} >
            <LeftArrow></LeftArrow>
          </div>
          <span>{props.targetUser.firstname}</span><span>{props.targetUser.lastname}</span>
        </div>
        <div id={"center-panel__below-nav"} >
          <div className="center-panel__below-nav__scroll" >
            <div className={"below-nav-section"} >
              <img id={"profile-banner"} alt={""} src={props.targetUser.banner_pic} ></img>
              {/* <div id={"profile-banner"} ></div> */}
              <div id={"profile-panel__below-nav__profile-bublle-c"} onClick={fullscreenPic}>
                <img className={"profile-bubble-4"} alt={""} src={props.targetUser.profile_pic} ></img>
                {/* <div className={"profile-bubble-4"} ></div> */}
              </div>
              <span name="tweet-textarea" className="textarea-hide" role="textbox" resize="none" contentEditable=""></span>
            </div>
            <div className={"below-tweet-nav-section-2"} >
              <div id={"edit-profile-button"}>
                <span>Edit Profile</span>
              </div>
              <span className={"profile-user-name"} >{props.targetUser.firstname}</span><span className={"profile-user-name"}>{props.targetUser.lastname}</span>
              <span className={"profile-chatter-name"} >@</span><span className={"profile-chatter-name"} > {props.targetUser.username}</span>
              <span className={"profile-bio"} >{props.targetUser.about}</span>
            </div>

            <div className="all-tweets-c">

              {tweetState[0] ?
                tweetState.map((tweet) => (
                  <Tweet
                    props={tweet}
                    targetUser={props.targetUser}
                    centerPanelProfile={props.centerPanelProfile}
                    tweetInfoFunc={props.tweetInfoFunc}
                    user={props.user}
                    setTweetIdsState={props.setTweetIdsState}
                    centerPanelTweetPanel={props.centerPanelTweetPanel}
                  />)
                )

                : null
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default ProfilePage;