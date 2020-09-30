import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import FacebookImage from '../images/FacebookImage.png';
import TwitterCircular from '../images/TwitterCircular.png';

const token = window.localStorage.getItem('auth_token');

const UserGallery = (props) => {
  const [imageModalState, setImageModalState] = useState(false);

  function setModalStateFalse() {
    props.setOpenCloseState(false)
  }

  function setupModalInfo(e) {
    let title = e.target.nextSibling.innerHTML;
    let description = e.target.nextSibling.nextSibling.innerHTML;
    let hrf = e.target.src

    setImageModalState({
      hrf: hrf
      , description: description
      , title: title
    })
    console.log("imageModalState====>", imageModalState);
  }
  // -----------------------------------------

  const [userGalleryState, setUserGalleryState] = useState(false);

  // useEffect(() => {
  //   const getCurrentUser = async () => {
  //     const token = window.localStorage.getItem('auth_token')
  //     const response = await fetch(`${API_URL}/users/token`, {
  //       method: "GET",
  //       mode: "cors",
  //       headers: { "Authorization": `Bearer ${token}` },
  //     })
  //     if (!response.ok) {
  //       console.log("this will never happen. you can quote me")
  //     } else {
  //       const json = await response.json();
  //       setUser(json);
  //     }
  //   }
  //   getCurrentUser();
  // }, [targetUser])

  const id = 1;

  useEffect(() => {
    const getUserGallery = async () => {
      // if (props.reply.id === undefined) return 

      const response = await fetch(`${API_URL}/api/gallery/get/${id}`, {

        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        console.log("getUserGallery response failed")
      } else {
        const json = await response.json()
        // .then(()=>console.log("userJson", json) )
        setUserGalleryState(json)
        console.log("userJson", json)
      }
    }
    getUserGallery()
    // console.log("userGalleryState", userGalleryState)
  }, [])
  // ------------------------------------------

  return (
    <>
      <div id="fb-root"></div>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="EJjP46dz"></script>

      {props.openCloseState ?
        <div id={"image-modal-c"}
          onClick={() => props.setOpenCloseState(false)}
        >
          <div id={"image-modal-c__scroll"}>
            <img id={"image-modal-c__image"} className={`${props.modalImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.modalImageSizeState === 4 ? "potd-full-image" : ""}`} src={imageModalState.hrf.replace("thumb", "orig")} alt={""} />
            <div className={`image-modal-c__description-c`}>
              <h1>{imageModalState.title}</h1>
              <p>{imageModalState.description}</p>
              <div className={"social-media-links"} >
                {/* ---------------FB--------------- */}
                <div class="fb-share-button"
                  data-layout="button"
                  data-size="large"
                  lazy="true"
                >
                  <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${imageModalState.hrf}`} class="fb-xfbml-parse-ignore"><img className={"facebook-image"} src={FacebookImage} alt={""} /></a>
                </div>
                {/* -------------------------------- */}
                {/* -----------------Twitter------------- */}
                <a className="twitter-share-button"
                  href={`https://twitter.com/intent/tweet?text=${imageModalState.hrf}`}

                  data-size="large">
                  <img className="twitter-share-image" src={TwitterCircular} alt="" />
                </a>
                {/* ------------------------------------- */}
              </div>
            </div>
          </div>
        </div>
        : <div></div>
      }
      <ul className={"main-c__image-ul"}>
        {userGalleryState !== false ? userGalleryState.map((galleryItem, index) => {
            return (
              <div onClick={e => { setupModalInfo(e); props.setOpenCloseState(true) }} key={`${galleryItem.media} ${Math.floor(Math.random() * Math.floor(1000))}`}>
                <img
                  className={`search-array-image ${props.imageSizeState === 1 ? "sml-image" : "a"} ${props.imageSizeState === 2 ? "med-image" : ""} ${props.imageSizeState === 3 ? "lrg-image" : ""} ${props.imageSizeState === 4 ? "full-image" : "b"}`} src={galleryItem.media} alt="" loading="lazy" >
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
