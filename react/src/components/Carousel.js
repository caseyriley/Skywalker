import React, { useState, useEffect } from 'react';
import carousel from '../images/Carousel.svg';
import saturn from '../images/saturnIllustration.png';

const Carousel = (props) => {

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

  // useEffect(()=>{
  //   function fade(){
  //     setTimeout(() => {
  //       let nextOpacityState = !opacityState;
  //       setOpacityState(nextOpacityState)
  //       // setTimeout(() => {
  //       //   setCurrentImageState(currentImageState + 1);
  //       //   setTimeout(() => {
  //       //     setNextImageState(nextImageState + 1);
  //       //     setTimeoutState(timeoutState + 1)
  //       //   }, 1500);
  //       // }, 1500);
  //       setTimeoutState(timeoutState + 1)
  //     }, 3000);
  //   }
  //   fade();
  // }, [timeoutState]);

  return (
    <>
      {/* {carouselToggleState ? 
        <>
          <div className={"carousel-img-c"}>

            <div className={`carousel-background ${opacityState ? "opacity-zero" : "opacity-100"}`}> 
              <img className={`carousel-img-1 ${opacityState ? "opacity-zero" : "opacity-100"}`} src={userGalleryArray[currentImageState].media} alt={""} onClick={carouselToggle} />
            </div>

            <div className={`carousel-background`}> 
              <img className={`carousel-img-2`} src={userGalleryArray[nextImageState].media} alt={""} onClick={carouselToggle} />
            </div>

          </div>
        </>
        :
        <>
        </>
      } */}
      <div className={"carousel-c"} onClick={props.carouselToggle}>
        <img className={"carousel"} src={carousel} alt={""} ></img>
        <img className={"carousel-saturn"} src={saturn} alt={""} ></img>
      </div>
    </>
  )
}
export default Carousel;