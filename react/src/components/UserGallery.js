import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import twitterPlain from '../images/twitterPlain.png';
import Star from './Star';
import facebookPlain from '../images/facebookPlain.png';
import Celestial from './Celestial';

const token = window.localStorage.getItem('auth_token');

const UserGallery = (props) => {


  // const [user, setUser] = useState({})
  // const [nothingState, setNothingState] = useState();

  // useEffect(() => {
  //   const getCurrentUser = async () => {
  //     const token = window.localStorage.getItem('auth_token')
  //     const response = await fetch(`${API_URL}/api/users/token`, {
  //       method: "GET",
  //       mode: "cors",
  //       headers: { "Authorization": `Bearer ${token}` },
  //     })
  //     if (!response.ok) {
  //       console.log("this will never happen. you can quote me")
  //     } else {
  //       const json = await response.json();
  //       setUser(json);
  //       console.log("user set");
  //     }
  //   }
  //   getCurrentUser();
  // }, [])


  const [imageModalState, setImageModalState] = useState(false);
 
  function setModalStateFalse() {
    props.setUserModalopenCloseState(false)
  }

  function setupModalInfo(e) {
    const title = e.target.nextSibling.innerHTML;
    const description = e.target.nextSibling.nextSibling.innerHTML;
    const hrf = e.target.src
    setImageModalState({hrf: hrf, description: description, title: title})
  }
  // -----------------------------------------

  const id = props.user.id;

  useEffect(() => {
    const getUserGallery = async () => {
      const response = await fetch(`${API_URL}/api/gallery/get/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      if (!response.ok) {
      } else {
        const json = await response.json()
        props.setUserGalleryState(json)
      }
    }
    getUserGallery()
  }, [])




  // ------------------------------------------

  return (
    <>
      <div id="fb-root"></div>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="EJjP46dz"></script>

      {props.userModalopenCloseState ?
        <div id={"image-modal-c"}>
          <div id={"image-modal-c__scroll"}>
            <img id={"image-modal-c__image"} onClick={setModalStateFalse} className={`${props.userModalImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.userModalImageSizeState === 4 ? "potd-full-image" : ""}`} src={imageModalState.hrf ? imageModalState.hrf.replace("thumb", "orig") : ""} alt={""} />
            <div className={`image-modal-c__description-c`}>
              <h1 onClick={setModalStateFalse}>{imageModalState.title}</h1>
              <p onClick={setModalStateFalse}>{imageModalState.description}</p>
              <div className={"social-media-links"} >
                <Star user={props.user} userModalopenCloseState={props.userModalopenCloseState} 
                imageModalState={imageModalState} />
                {/* ---------------FB--------------- */}
                <div class="fb-share-button"
                  data-layout="button"
                  data-size="large"
                  lazy="true"
                >
                  <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${imageModalState.hrf}`} class="fb-xfbml-parse-ignore"><img className={"facebook-image"} src={facebookPlain} alt={""} /></a>
                </div>
                {/* -------------------------------- */}
                {/* -----------------Twitter------------- */}
                <a className="twitter-share-button"
                  href={`https://twitter.com/intent/tweet?text=${imageModalState.hrf}`}

                  data-size="large">
                  <img className="twitter-share-image" src={twitterPlain} alt="" />
                </a>
                {/* ------------------------------------- */}
              </div>
            </div>
          </div>
        </div>
        : <div></div>
      }
      <ul className={"main-c__image-ul"}>
        <Celestial/>
        {props.userGalleryState !== false ? props.userGalleryState.map((galleryItem, index) => {
            return (
              <div onClick={e => { setupModalInfo(e); props.setUserModalopenCloseState(true); props.closeBottomNav()}} key={`${galleryItem.media} ${Math.floor(Math.random() * Math.floor(1000))}`}>
                <img
                  className={`search-array-image ${props.userGalleryImageSizeState === 1 ? "sml-image" : "a"} ${props.userGalleryImageSizeState === 2 ? "med-image" : ""} ${props.userGalleryImageSizeState === 3 ? "lrg-image" : ""} ${props.userGalleryImageSizeState === 4 ? "full-image" : "b"}`} src={galleryItem.media} alt="" loading="lazy" >
                </img>
                <p className={"search-array-image__data__descirption"} loading="lazy">{galleryItem.title}</p>
                <p className={"search-array-image__data__descirption"} loading="lazy">{galleryItem.description}</p>
              </div>
            )
          }) :
          <h1>Bad Data</h1>
        }
        <div className={"loading"}>{props.loading && 'loading.....'}</div>
        <div>{props.error && 'Error'}</div>
      </ul>
    </>
  )
}
export default UserGallery;
