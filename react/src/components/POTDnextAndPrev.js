import React from 'react';
import nextArrow from '../images/nextArrow.png'


const POTDnextAndPrev = (props) => {
  return (
    <div id={"POTD-next-prev"}>
      <di id={"POTD-next-prev__prev"} onClick={props.potdPrevDay} > 
        <img id={"POTD-next-prev__prev__img"} src={nextArrow} alt=""/>
      </di>
      <di id={"POTD-next-prev__next"} onClick={props.potdNextDay}>
        <img id={"POTD-next-prev__next__img"} src={nextArrow} alt="" />
      </di>
    </div>
  )
}
export default POTDnextAndPrev;