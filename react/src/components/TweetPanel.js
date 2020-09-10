import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import Sparkles from '../images/Sparkles';
import Landcape from '../images/Landscape';
import GifBox from '../images/GifBox';
import PollBox from '../images/PollBox';
import SmileyFace from '../images/SileyFace';
import Calendar from '../images/Calendar'
import Tweet from './Tweet';
import LeftArrow from '../images/LeftArrow';
import TweetPanelTweet from './TweetPanelTweet';
import TweetPanelComment from './TweetPanelComment';


const TweetPanel = (props) => {
  const [tweetState, setTweetState] = useState([])

  useEffect(() => {


    const token = window.localStorage.getItem('auth_token')
    const tweetReplies = async ()=>{
      const response =  await fetch(`${API_URL}/tweets/tweet/${props.tweetIdsState}`, {
        method: "GET",
        mode: "cors",
        headers: { "Authorization": `Bearer ${token}` },
      })

      if (!response) console.log("response FAIL")
      else {
        const json = await response.json()
        setTweetState(json)
      }
    }
    tweetReplies()
  }, [])

  return (
    <>
      <div id={"center-panel"}>
        <div id={"center-panel__nav"}>
          <div className={"tweet-left-arrow-c"} onClick={props.centerPanelHome} >
            <LeftArrow ></LeftArrow>
            <span>Tweet</span>
          </div>
        </div>
        <div id={"tweet-panel__below-nav"} >
          <div className="tweet-panel__below-nav__scroll" >

            <div className="all-tweets-c">
          
              <TweetPanelTweet user={props.user} props={tweetState} centerPanelHome={props.centerPanelHome} ></TweetPanelTweet>
    
              {tweetState.replies ?
                tweetState.replies.map(reply => (<TweetPanelComment user={props.user}  reply={reply} /> ) )
                : null
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TweetPanel;
