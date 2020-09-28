import React, {useState} from 'react';


const ImageDataGallery = (props) => {
const [imageModalState, setImageModalState] = useState(false);
// const [props.openCloseState, setOpenCloseState] = useState(false);
  
    function setModalStateFalse(){
      props.setOpenCloseState(false)
    }

   function setupModalInfo(e){
     let title = e.target.nextSibling.innerHTML;
     let description = e.target.nextSibling.nextSibling.innerHTML; 
     let hrf = e.target.src
     
     setImageModalState({ hrf: hrf
      , description: description
      , title: title 
    })
     console.log("imageModalState====>", imageModalState);
   }

  return (
    <>
      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="EJjP46dz"></script>
      {props.openCloseState ? 
        <div id={"image-modal-c"}
          onClick={() => props.setOpenCloseState(false)} 
         >
        <div id={"image-modal-c__scroll"}>
          <img id={"image-modal-c__image"} className={`${props.modalImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.modalImageSizeState === 4 ? "potd-full-image" : ""}`} src={imageModalState.hrf.replace("thumb", "orig")} alt={""} />
          <div className={`image-modal-c__description-c`}>
            <h1>{imageModalState.title}</h1>
            <p>{imageModalState.description}</p>
            {/* ---------------FB--------------- */}
              <div class="fb-share-button" 
                // data-href={`${imageModalState.hrf}`} 
                // data-href="https://skywalker3.herokuapp.com/" 
                data-layout="button" 
                data-size="large"
                lazy="true"
              >
                
                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${imageModalState.hrf}`} class="fb-xfbml-parse-ignore">Share</a>
                  {/* <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fskywalker3.herokuapp.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a> */}
              </div>
            {/* -------------------------------- */}
          </div>
        </div>
    </div> 
    : <div></div>  }
    <ul className={"main-c__image-ul"}>
      {/* <li className={"main-c__image-li"}> */}
        {props.allResults && props.error !== true ? props.allResults.map((item, index) => {
          if (props.allResults.length === index + 1) {
            return (
              <>
              <li className={"main-c__image-li"}>
              <div onClick={e => { setupModalInfo(e); props.setOpenCloseState(true)}} key={`${item.links[0].href} ${Math.floor(Math.random() * Math.floor(1000))}`}>
                <img ref={props.lastSearchElementRef} className={`search-array-image ${props.imageSizeState === 1 ? "sml-image" : "a"} ${props.imageSizeState === 2 ? "med-image" : ""} ${props.imageSizeState === 3 ? "lrg-image" : ""} ${props.imageSizeState === 4 ? "full-image" : "b"}`} src={item.links[0].href} alt={""} loading="lazy" key={`${item.links[0].href}${Math.floor(Math.random() * Math.floor(1000))}`}></img>
                <p className={"search-array-image__data__descirption"} loading="lazy">{item.data[0].description}</p>
              </div>
              </li>
            </>
            )
          } else {
            return (
              <div onClick={e => { setupModalInfo(e); props.setOpenCloseState(true)}} key={`${item.links[0].href} ${Math.floor(Math.random() * Math.floor(1000))}`}>
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
      {/* </li> */}
      <div className={"loading"}>{props.loading && 'loading.....'}</div>
      <div>{props.error && 'Error'}</div>
    </ul>
    </>
  )
}
export default ImageDataGallery;