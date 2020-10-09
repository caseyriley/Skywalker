import React from 'react';
import carousel from '../images/Carousel.svg';
import saturn from '../images/saturnIllustration.png';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Carousel = (props) => {

  const handle = useFullScreenHandle();
  
  return (
    <>
      <div className={"carousel-c"} onClick={props.carouselToggle}>
        <img className={"carousel"} src={carousel} alt={""} ></img>
        <img className={"carousel-saturn"} src={saturn} alt={""} ></img>
      </div>
    </>
  )
}
export default Carousel;