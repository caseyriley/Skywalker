import React from 'react';
import clearStar from '../images/clearStar.png'

const Star = () => {

  return (
    <>
    <div className={"star-c"} >
      <img className={"star"} src={clearStar} alt={""}/>
        <span >Add To Gallery</span>
    </div>
    </>
  )
}
export default Star;