import React from 'react';
import clearStar from '../images/clearStar.png'
import { API_URL } from '../config';

const Star = (props) => {
  
  const postFunction = async () => {
    console.log("imageModalState", props)

    // const tweetContent = document.getElementsByName("tweet-textarea")[0].innerText
    const galleryData = { media: props.imageModalState.hrf, title: props.imageModalState.title, description: props.imageModalState.description, user_id: 1 }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(galleryData),
      // redirect: 'follow'
    }

    fetch(`${API_URL}/api/gallery/post`, options)
      // .then(res => res.text())
      // .then(data => {
      //   document.getElementsByName("tweet-textarea")[0].innerHTML = ""
      //   console.log(data)
      // })
      // .catch(e => console.log('error posting your tweet', e))

  }

  return (
    <>
      <div className={"star-c"} onClick={postFunction}>
      <img className={"star"} src={clearStar} alt={""}/>
        <span >Add To Gallery</span>
    </div>
    </>
  )
}
export default Star;