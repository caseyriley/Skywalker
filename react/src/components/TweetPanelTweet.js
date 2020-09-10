import React, { useState, useEffect } from 'react';
import { API_URL } from '../config'
import CommentBubbleTweet from '../images/CommentBubbleTweet';
import RetweetTweet from '../images/RetweetTweet';
import HeartTweet from '../images/HeartTweet';
import Heart from '../images/Heart';
import LinkTweetTweet from '../images/LinkTweetTweet';
import DownCarrot from '../images/DownCarrot';

const token = window.localStorage.getItem('auth_token')

const TweetPanelTweet = (props) => {
  const [hearted, setHearted] = useState("heart");
  const [heartCount, setHeartCount] = useState(0);
  const [retweeted, setRetweeted] = useState("retweet");
  const [retweetCount, setRetweetCount] = useState(0);

  const handleHeartClick = () => {
    if (hearted === "heart") {
      const createLike = async () => {
        const response = await fetch(`${API_URL}/likes/`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            userId: `${props.user.id}`,
            tweetId: `${props.props.id}`
          }),
        });
        if (!response.ok) {
          console.log("createLike response failure");
        } else {
          console.log("createLike response success");
        }
      }
      createLike();
      setHearted("heartOn");
      setHeartCount(heartCount + 1);
    }
    else {
      const destroyLike = async () => {
        const response = await fetch(`${API_URL}/likes/`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            userId: `${props.user.id}`,
            tweetId: `${props.props.id}`
          }),
        });
        if (!response.ok) {
          console.log("destroyLike response failure");
        } else {
          console.log("destroyLike response success");
        }
      }
      destroyLike();
      setHearted("heart");
      setHeartCount(heartCount - 1);
    };
  };

  const handleRetweetClick = () => {
    retweeted === "retweet" ? setRetweeted("retweetOn") : setRetweeted("retweet")
  }

  useEffect(() => {
    const getHeartedCount = async () => {
      if (props.props.id === undefined) return
      const response = await fetch(`${API_URL}/likes/${props.props.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        console.log("getHeartedCount response failed")
      } else {
        const json = await response.json();
        setHeartCount(json.count)
      }
    }
    const getUserHearted = async () => {
      if (props.props.id === undefined) return
      const response = await fetch(

        `${API_URL}/likes/${props.user.id}/${props.props.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
      )
      if (!response.ok) {
        console.log("getUserHearted response failed")
      } else {
        const json = await response.json();
        console.log("Here's Jason --> ", json)
        if (json.like !== null) {
          console.log("JASON! --> ", json.like)
          setHearted("heartOn")
        }
      }
    }
    getHeartedCount();
    // getUserHearted(); -- commented out for dev
  }, [])


  return (
    <div className={"tweet-c"}>
      {/* <span className={"tweet-c__name"}>{props}</span> */}
      <div className={"tweet-c__top"}>
        <img className={"user__profile-pic"} alt={""} src={props.props.user ? props.props.user.profile_pic : ""} ></img>
        <div className={"tweet-c__user-name"} >
          <div className={"tweet-p-t-c__user-name__names"} >
            <p className={"tweet-p-t-c__user-name__names__top"}>{`${props.props.user ? props.props.user.firstname : ""} ${props.props.user ? props.props.user.lastname : ""}`}</p>
            <p className={"tweet-p-t-c__user-name__names__bottom"}>@{props.props.user ? props.props.user.username : ""}</p>
          </div>
          <div className={"down-carrot-c"}>
            <DownCarrot />
          </div>
        </div>
      </div>
      <div className="tweet-c__comment" onClick={() => {
        // props.tweetInfoFunc(props.props.id)
        // props.centerPanelTweetPanel()
      }}
      >
        <p className={"tweet-p-t__comment"}>{props.props.content}</p>
      </div>
      <img className={"tweet-pic"} alt={""} src={props.props.media} ></img>
      <div className={"tweet-c__svg-c"} >
        <CommentBubbleTweet />
        <div onClick={handleRetweetClick}>
          <RetweetTweet retweeted={retweeted} />
        </div>
        <div
          className="tweet-panel-tweet-like--container"
          onClick={handleHeartClick}>
          <HeartTweet hearted={hearted} />
          {heartCount > 0 ? <span>{heartCount}</span> : <span></span>}
        </div>
          <LinkTweetTweet />
      </div>
    </div>
  )
}
export default TweetPanelTweet;
