import React, { useState, useEffect } from 'react';
import useScript from './useScript';



const CarouselDisplay = (props, items) => {

  // useEffect(() => {
  //   console.log(process.env.REACT_APP_API_KEY);  
  //   fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + process.env.REACT_APP_API_KEY + '&tags=' + searchString + '&per_page=' + numPics + '&page=1&format=json&nojsoncallback=1')
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (j) {

  //       const lookupPic = function (index) {
  //         let pic = j.photos.photo[index];
  //         return 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
  //       }
  //       let picCount = 0;

  //       setPic(lookupPic(picCount));
  //       picCount++;
  //       setInterval(() => {
  //         setBlurState(true);
  //         setTimeout(() => {
  //           setPic(lookupPic(picCount));
  //         }, 150);

  //         setTimeout(() => {
  //           setBlurState(false);
  //         }, 500);
  //         // setBlurState(false);
  //         picCount++;
  //       }, 5000);
  //     })
  // }, [searchArrayState]);
  // let userGalleryArray = props.userGalleryState ? props.userGalleryState : [];

  // const [opacityState, setOpacityState] = useState(false);

  // const [carouselToggleState, setCarouselToggleState] = useState(false);
  // const carouselToggle = () => {
  //   let next = !carouselToggleState;
  //   setCarouselToggleState(next);
  // };

  // const [currentImageState, setCurrentImageState] = useState(0);
  // const [nextImageState, setNextImageState] = useState(1);
  // const [timeoutState, setTimeoutState] = useState(1);



  // --------------------------
  // const [carouselNextState, setCarouselNextState] = useState(77);
  // useEffect(()=> {
  //   if (props.carouselToggleState){
  //     let count = props.userGalleryArray.length -1;
  //     const carouselElement = document.getElementById("carousel-img-c")
  //     let child = document.querySelector(`#carousel-img-c div:nth-child(${count})`)
  //     console.log(child)
  //     setInterval(() => {
  //       child.classList.add("opacity-zero")
  //       count --;
  //       setCarouselNextState(carouselNextState + 2)
  //     }, 5000);
  //   }
  // }, [props.carouselToggleState])
// ---------------------------------

  const [itemsState, setItemsState] = useState([]);
  useEffect(()=>{
    for (let i = props.userGalleryArray.length - 1; i > -1; i--) {
      let galleryItem = props.userGalleryArray[i];
      setItemsState(prevResults => {
        return [...prevResults, <div className={`carousel-background`} key={`${galleryItem.media} ${Math.floor(Math.random() * Math.floor(1000))}`}><img className={`carousel-img-1`} src={galleryItem.media} alt={""} /></div>]} 
      )
    }
  }, [props.carouselToggle])


  useEffect(()=>{
    let stage = document.getElementById("carousel-img-c");
    let fadeComplete = function (e) { stage.appendChild(arr[0]); };
    let arr = document.getElementsByClassName("carousel-background");
    for (let i = 0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }
  })


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