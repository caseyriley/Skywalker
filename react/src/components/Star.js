import React, {useEffect, useState} from 'react';
import folderLove from '../images/folder-love.png'
import { API_URL } from '../config';
import Favorite from './Favorite';

const token = window.localStorage.getItem('auth_token');

const Star = (props) => {
  const [inDatabaseState, setInDatabaseState] = useState(false);
  // const id = props.user;
  const id = 1;
  const hrf = props.imageModalState.hrf;

  useEffect(() => {
    const checkForHeart = async () => {
      const response = await fetch(`${API_URL}/api/gallery/check/${id}?hrf=${hrf}`, {
        method: "GET",
        mode: "cors",
        params: { hrf: `${decodeURIComponent(hrf)}` },
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        console.log("checkForHeart response failed")
      } else {
        const json = await response.json()
        setInDatabaseState(json)
      } 
    }
      checkForHeart()
  }, [props.userModalopenCloseState])


  const destroyHeart = async () => {
    const response = await fetch(`${API_URL}/api/gallery/remove/`, {
      method: ["DELETE"], 
      mode: "cors",
      // params: { hrf: `${decodeURIComponent(hrf)}` },
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        id: `${id}`,
        hrf: `${decodeURIComponent(hrf)}`
        // tweetId: `${props.props.id}`
      }),
    });
    if (!response.ok) {
      console.log("destroyLike response failure");
      setInDatabaseState("False")
    } else {
      console.log("destroyLike response success");
      setInDatabaseState("False")
    }
  }
  
  
  const postFunction = async () => {
    const galleryData = { media: decodeURI(props.imageModalState.hrf), title: props.imageModalState.title, description: props.imageModalState.description, user_id: 1 }
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(galleryData),
    }
    fetch(`${API_URL}/api/gallery/post`, options)
  }

  return (
    <>
      { inDatabaseState === "True" ?
        <Favorite destroyHeart={destroyHeart}/>
      : 
        <div className={"folder-love-c"} onClick={() => {postFunction(); setInDatabaseState("True")}}>
          <img className={"folder-love"} src={folderLove} alt={""} />
        </div>
      } 
    </>
  )
}
export default Star;