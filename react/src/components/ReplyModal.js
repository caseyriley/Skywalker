import React, { useState } from 'react';
import CloseButton from '../images/CloseButton.js'
import GifBox from '../images/GifBox.js'
import LandscapeReply from '../images/LandscapeReply.js'
import PollBox from '../images/PollBox.js'
import Calendar from '../images/Calendar.js'
import Smiley from '../images/Smiley.js'
import { API_URL } from '../config.js'

const token = window.localStorage.getItem('auth_token')



const ReplyModal = (props) => {
    const [replyInput, setReplyInput] = useState("");
    const updateReplyInput = (e) => setReplyInput(e.target.value)

    const handleReplySubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_URL}/replies/`, {
            method: "POST",
            // mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ user_id: props.user.id, tweet_id: props.tweet_id, reply: replyInput })
        })
        if (response.ok) {
            window.location.reload()
        } else {
            console.log("-------Reply Failed---------");
        }
    }

    return (
        <div className={`reply-modal-c ${props.replyModal ? "visible" : "hidden"}`}>
            <div className={"reply-modal-background"} ></div>
            <div className={"reply-form-background"}>
                <div className={"reply-form-header"}>
                    <div className={'reply-close-c'} onClick={props.handleReplyClick}>
                        <CloseButton />
                    </div>
                </div>
                <div style={{ overflow: "scroll" }}>
                    <div className={"reply-form-tweet-info"}>
                        <div className={"reply-form-tweet-info__side-panel"}>
                            <img className={'user__profile-pic-reply-top'} src={props.tweet.user.profile_pic}></img>
                            <div className={"reply-form-tweet-info__side-border"}></div>
                        </div>
                        <div className={"reply-form-tweet-content"}>
                            <div className={"reply-form-tweet-content__header"}>
                                <span className={"tweet-content__username"}>{props.tweet.user.username}</span> <span className="tweet-content__email">{props.tweet.user.email}</span>
                            </div>
                            <div>
                                {props.tweet.content}
                            </div>
                            <div className={"reply-form-tweet-content__footer"}>
                                <span className={"tweet-content__email"}>Replying to</span> <a className="reply-form-userlink" href="">{props.tweet.user.email}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"reply-form-response"}>
                    <div className={"reply-form-response__side"}>
                        <img className={"user__profile-pic-reply"} src={props.user.profile_pic}></img>
                        <div className={"reply-form-response__side-spacer"}></div>
                    </div>
                    <div className="reply-form-response__content">
                        <textarea value={replyInput} className={"reply-form-textarea"} placeholder={"Tweet your reply"} onChange={updateReplyInput}></textarea>
                        <div className="reply-form-response__footer">
                            <div><GifBox /><LandscapeReply /><PollBox /><Calendar />< Smiley /></div>
                            <button className={"reply-form-submit"} onClick={handleReplySubmit}>Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ReplyModal