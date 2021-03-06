import React, {useState, useEffect} from 'react';
import { API_URL } from '../config.js'
import Star from './Star';
import facebookPlain from '../images/facebookPlain.png';
import twitterPlain from '../images/twitterPlain.png';
import Celestial from './Celestial';



const ImageDataGallery = (props) => {

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = window.localStorage.getItem('auth_token')
      const response = await fetch(`${API_URL}/api/users/token`, {
        method: "GET",
        mode: "cors",
        headers: { "Authorization": `Bearer ${token}` },
      })
      if (!response.ok) {
        // console.log("this will never happen. you can quote me")
      } else {
        const json = await response.json();
        props.setUser(json);
      }
    }
    getCurrentUser();
  }, [])


const [imageModalState, setImageModalState] = useState(false);
  

   function setupModalInfo(e){
     let title = e.target.nextSibling.innerHTML;
     let description = e.target.nextSibling.nextSibling.innerHTML; 
     let hrf = e.target.src;
  
     setImageModalState({ hrf: hrf, 
      description: description, 
      title: title, 
    })
   }

  return (
    <>
      <div id="fb-root"></div>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="EJjP46dz"></script>
   
      {props.openCloseState ? 
        <div id={"image-modal-c"}
         >
        <div id={"image-modal-c__scroll"}>
            <img id={"image-modal-c__image"} className={`${props.modalImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.modalImageSizeState === 4 ? "potd-full-image" : ""}`} src={imageModalState.hrf.replace("thumb", "orig")} alt={""} onClick={() => props.setOpenCloseState(false)} />
          <div className={`image-modal-c__description-c`}>
            <h1 onClick={() => props.setOpenCloseState(false)} >{imageModalState.title}</h1>
            <p onClick={() => props.setOpenCloseState(false)} >{imageModalState.description}</p>
            <div className={"social-media-links"} >
                <Star openCloseState={props.openCloseState} user={props.user} imageModalState={imageModalState}/>
              {/* ---------------FB--------------- */}
                <div className="fb-share-button potd-description__fade" 
                  data-layout="button" 
                  data-size="large"
                  lazy="true"
                > 
                  <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${imageModalState.hrf}`} className="fb-xfbml-parse-ignore"><img className={"facebook-image"} src={facebookPlain} alt={""} /></a>
                </div>
              {/* -------------------------------- */}
              {/* -----------------Twitter------------- */}
                <a className="twitter-share-button potd-description__fade"
                  href={`https://twitter.com/intent/tweet?text=${imageModalState.hrf}`}

                  data-size="large">
                  <img className="twitter-share-image" src={twitterPlain} alt="" />
                </a>
              {/* ------------------------------------- */}
            </div>
          </div>
        </div>
    </div> 
    : <div></div>  }
    <ul className={"main-c__image-ul"}>
        <Celestial/>
        {props.allResults && props.error !== true ? props.allResults.map((item, index) => {
          if (props.allResults.length === index + 1) {
            return (
              <>
              <li className={"main-c__image-li"}>
                  <div onClick={e => { setupModalInfo(e); props.setOpenCloseState(true); props.closeBottomNav()}} key={`${item.links[0].href} ${Math.floor(Math.random() * Math.floor(1000))}`}>
                <img ref={props.lastSearchElementRef} className={`search-array-image ${props.imageSizeState === 1 ? "sml-image" : "a"} ${props.imageSizeState === 2 ? "med-image" : ""} ${props.imageSizeState === 3 ? "lrg-image" : ""} ${props.imageSizeState === 4 ? "full-image" : "b"}`} src={item.links[0].href} alt={""} loading="lazy" key={`${item.links[0].href}${Math.floor(Math.random() * Math.floor(1000))}`}></img>
                <p className={"search-array-image__data__descirption"} loading="lazy">{item.data[0].description}</p>
              </div>
              </li>
            </>
            )
          } else {
            return (
              <div onClick={e => { setupModalInfo(e); props.setOpenCloseState(true); props.closeBottomNav()}} key={`${item.links[0].href} ${Math.floor(Math.random() * Math.floor(1000))}`}>
                <img 
                  className={`search-array-image ${props.imageSizeState === 1 ? "sml-image" : "a"} ${props.imageSizeState === 2 ? "med-image" : ""} ${props.imageSizeState === 3 ? "lrg-image" : ""} ${props.imageSizeState === 4 ? "full-image" : "b"}`} src={item.links[0].href} alt="" loading="lazy" >
                </img>
                <p className={"search-array-image__data__descirption"} loading="lazy">{item.data[0].title}</p>
                <p className={"search-array-image__data__descirption"} loading="lazy">{item.data[0].description}</p>
              </div>
            )
          }
        }) : 
        <h1>Bad Data</h1>}
    
      <div className={"loading"}>{props.loading && 'loading.....'}</div>
      <div>{props.error && 'Error'}</div>
    </ul>
    </>
  )
}
export default ImageDataGallery;