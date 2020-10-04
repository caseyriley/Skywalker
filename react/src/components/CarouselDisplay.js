import React, { useState, useEffect } from 'react';

const CarouselDisplay = (props) => {

  useEffect(() => {
    // console.log(process.env.REACT_APP_API_KEY);  
    // fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + process.env.REACT_APP_API_KEY + '&tags=' + searchString + '&per_page=' + numPics + '&page=1&format=json&nojsoncallback=1')
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (j) {

        // const lookupPic = function (index) {
        //   let pic = j.photos.photo[index];
        //   return 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
        // }
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
  }, [props.carouselToggleState])
// ---------------------------------


  return (
    <>
      {props.carouselToggleState ?
        <>
          <div id={"carousel-img-c"} onClick={props.carouselToggle}>
          {props.userGalleryArray.map((galleryItem, index) => {
            return (
              
              <div className={`carousel-background`} key={`${galleryItem.media} ${Math.floor(Math.random() * Math.floor(1000))}`}>
                <img className={`carousel-img-1`} src={galleryItem.media} alt={""} />
              </div>
            )
          }) 
            
          }
          </div>
          {/* <div className={"carousel-img-c"} onClick={props.carouselToggle}>

            <div className={`carousel-background`}>
              <img className={`carousel-img-1`} src={props.userGalleryArray[props.nextImageState].media} alt={""}  />
            </div>

            <div className={`carousel-background  ${props.opacityState ? "opacity-zero" : "opacity-100"}` }>
              <img className={`carousel-img-2`} src={props.userGalleryArray[props.currentImageState].media} alt={""}/>
            </div>

          </div> */}
        </>
        :
        <>
        </>
      }
      {/* <div className={"carousel-c"} onClick={carouselToggle}>
        <img className={"carousel"} src={carousel} alt={""} ></img>
        <img className={"carousel-saturn"} src={saturn} alt={""} ></img>
      </div> */}
    </>
  )
}
export default CarouselDisplay;