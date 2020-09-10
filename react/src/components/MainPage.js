import React, { useState, useEffect } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import CenterPanelSwitch from './CenterPanelSwitch';
import { API_URL } from '../config.js'

const MainPage = () => {
  const [centerPanelState, setPanelState] = useState("Home");
  const [user, setUser] = useState({})
  const [targetUser, setTargetUser] = useState(1);

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = window.localStorage.getItem('auth_token')
      const response = await fetch(`${API_URL}/users/token`, {
        method: "GET",
        mode: "cors",
        headers: { "Authorization": `Bearer ${token}` },
      })
      if (!response.ok) {
        console.log("this will never happen. you can quote me")
      } else {
        const json = await response.json();
        setUser(json);
      }
    }
    getCurrentUser();
  }, [targetUser])

  const centerPanelHome = () => {
    setPanelState("Home")
  }
  const centerPanelProfile = (id) => {
    setTargetUser(id);
    setPanelState("Profile");
  }
  const centerPanelTweetPanel = () => {
    setPanelState("TweetPanel");
  }

    return (
      <div id={"main-c"}>
        <LeftPanel
          centerPanelHome={centerPanelHome}
          user={user} />
        <CenterPanelSwitch
          targetUser={targetUser}
          centerPanelState={centerPanelState}
          setPanelState={setPanelState}
          centerPanelHome={centerPanelHome}
          centerPanelProfile={centerPanelProfile}
          centerPanelTweetPanel={centerPanelTweetPanel}
          user={user}/>
        <RightPanel/>
      </div>
    )

}

export default MainPage;
