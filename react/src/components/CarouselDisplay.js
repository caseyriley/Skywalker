import React, { useState, useEffect } from 'react';



const CarouselDisplay = (props) => {


  const [itemsState, setItemsState] = useState([]);
  useEffect(()=>{
    for (let i = props.userGalleryArray.length - 1; i > -1; i--) {
      let galleryItem = props.userGalleryArray[i];
      setItemsState(prevResults => {
        return [...prevResults, <div className={`carousel-background`} key={`${galleryItem.media} ${Math.floor(Math.random() * Math.floor(1000))}`}><img className={`carousel-img-1`} src={galleryItem.media.replace("thumb", "orig")} alt={""} /></div>]} 
      )
    }
  }, [props.carouselToggle])


  useEffect(() => {
    let stage = document.getElementById("carousel-img-c");
    let fadeComplete = function () { stage.appendChild(arr[0]); };
    let arr = document.getElementsByClassName("carousel-background");
    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }
  }, [props.carouselToggle])


  return (
    <>
      {props.carouselToggleState ?
        <>
          <div id={"carousel-img-c"} onClick={props.carouselToggle}>
            {itemsState}
          </div>
        </>
        :
        <>
        </>
        
      }
    </>
  )

}
export default CarouselDisplay;