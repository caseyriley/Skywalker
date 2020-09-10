import React, { useState, useEffect } from 'react';
import CenterPanel from './CenterPanel';
import ProfilePage from './ProfilePage';
import TweetPanel from './TweetPanel'


const CenterPanelSwitch = (props) => {

  const [targetUser, setTargetUser] = useState({});

  const  [tweetIdsState, setTweetIdState] = useState();
  const tweetInfoFunc = (id)=>{
    setTweetIdState(id);
  }
  useEffect(()=>{
    setTargetUser(props.targetUser)
  },[props])

  const [tweerUserState, setTweetUserState] = useState();
  const getTweetUser =()=>{
    setTweetUserState()
  }

  
  return (
    <>

      {(() => {

        switch (props.centerPanelState) {
          case 'Home':
            return <CenterPanel user={props.user} targetUser={targetUser} tweetInfoFunc={tweetInfoFunc} centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} />
          case 'Profile':
            return <ProfilePage user={props.user} targetUser={targetUser} tweetInfoFunc={tweetInfoFunc} centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} />
            // return <ProfilePage  user={targetUser}   centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} centerPanelHome={props.centerPanelHome} />
          case 'TweetPanel':
            return <TweetPanel user={props.user} tweetInfoFunc={tweetInfoFunc}  centerPanelHome={props.centerPanelHome} centerPanelProfile={props.centerPanelProfile} tweetIdsState={tweetIdsState} />
          default:
            return <CenterPanel user={props.user} targetUser={targetUser} tweetInfoFunc={tweetInfoFunc} centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} />
        }

      })()}
    </>
  );


}

export default CenterPanelSwitch;