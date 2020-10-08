import React, { useState, useEffect } from 'react';
import carousel from '../images/Carousel.svg';
import saturn from '../images/saturnIllustration.png';

const Carousel = (props) => {
  
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