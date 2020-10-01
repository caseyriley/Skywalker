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
        params: { hrf: `${hrf}` },
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
  }, [props.openCloseState])
  
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
        <Favorite />
      : 
        <div className={"folder-love-c"} onClick={postFunction}>
          <img className={"folder-love"} src={folderLove} alt={""} />
        </div>
      } 
    </>
  )
}
export default Star;