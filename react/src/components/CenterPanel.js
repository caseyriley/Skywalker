import React, { useEffect, useState } from 'react';
import Sparkles from '../images/Sparkles';
import Landcape from '../images/Landscape';
import GifBox from '../images/GifBox';
import PollBox from '../images/PollBox';
import SmileyFace from '../images/SileyFace';
import Calendar from '../images/Calendar'
import Tweet from './Tweet';
import skelator from '../images/skelator.png';
import { API_URL } from '../config';



const CenterPanel = (props) => {


  const [tweetState, setTweetState] = useState([]);

  useEffect(() => {

    //TODO fix backend route to get tweets from following

    fetch(`${API_URL}/tweets/`)
      .then(res => res.json())
      .then(data => {
        setTweetState(data)
      }
    )
  },[])


  const postFunction = async () => {

    const tweetContent = document.getElementsByName("tweet-textarea")[0].innerText
    const tweetData = { content: tweetContent, user_id: 1 }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tweetData),
      redirect: 'follow'
    }

    fetch(`${API_URL}/tweets/post`, options)
      .then(res => res.text())
      .then(data => {
        document.getElementsByName("tweet-textarea")[0].innerHTML=""
        console.log(data)})
      .catch(e => console.log('error posting your tweet', e))

  }
  const profileBubbleAlt = skelator;

  return (
    <>
      <div id={"center-panel"}>
        <div id={"center-panel__nav"}>
          <span>Home</span>
          <Sparkles></Sparkles>
        </div>
        <div id={"center-panel__below-nav"} >
          <div className="center-panel__below-nav__scroll" >
            <div className={"below-nav-section"} >
              <img id={"profile-bubble-2"} alt={""} src={props.user.profile_pic} onClick={()=> props.centerPanelProfile(props.user)}></img>
                <div className={"profile-bubble-2"} ></div>
              {/* </div> */}
              <span name="tweet-textarea" className="textarea" role="textbox" resize="none" contentEditable=""></span>
            </div>
            <div className={"below-nav-section-2"} >
              <Landcape></Landcape>
              <GifBox></GifBox>
              <PollBox></PollBox>
              <SmileyFace></SmileyFace>
              <Calendar></Calendar>
              <div onClick={postFunction} id={"tweet-button-2"}>
                <span>Tweet</span>
              </div>
            </div>
            <div className="all-tweets-c">

              {tweetState ?
                tweetState.map((tweet) => (
                  <Tweet 
                    props={tweet} 
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
export default CenterPanel;
