import React, {useState} from 'react';


const ImageDataGallery = (props) => {
const [imageModalState, setImageModalState] = useState(false);
// const [props.openCloseState, setOpenCloseState] = useState(false);

    function setModalStateFalse(){
      props.setOpenCloseState(false)
    }

   function setupModalInfo(e){
     let description = e.target.nextSibling.innerHTML;
     let hrf = e.target.src
     setImageModalState({ hrf: hrf, description: description })
   }

  return (
    <>
      {props.openCloseState ? 
        <div id={"image-modal-c"}
          onClick={() => props.setOpenCloseState(false)} 
         >
        <div id={"image-modal-c__scroll"}>
            <img id={"image-modal-c__image"} className={`${props.modalImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.modalImageSizeState === 4 ? "potd-full-image" : ""}`} src={imageModalState.hrf.replace("thumb", "orig")} alt={""} />
            <div className={`image-modal-c__description-c`}>
          <p>{imageModalState.description}</p>
        </div>
      </div>
    </div> 
    : <div></div>  }
    <ul className={"main-c__image-ul"}>
      {/* <li className={"main-c__image-li"}> */}
        {props.allResults ? props.allResults.map((item, index) => {
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
                <p className={"search-array-image__data__descirption"} loading="lazy">{item.data[0].description}</p>
              </div>
            )
          }
        }) : <h1>Bad Data</h1>}
      {/* </li> */}
      <div className={"loading"}>{props.loading && 'loading.....'}</div>
      <div>{props.error && 'Error'}</div>
    </ul>
    </>
  )
}
export default ImageDataGallery;