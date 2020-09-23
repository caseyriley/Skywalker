import React from 'react';
import doubleChevron from '../images/doubleChevron.png'

const POTDImage = (props) => {
  console.log("POTDprops", props)
  return (
    <>
      <img id={"chevron-right"} src={doubleChevron} alt={"not here"} onClick={props.potdNextDay}></img>
      <img id={"chevron-left"} src={doubleChevron} alt={"not here"} onClick={props.potdPrevDay} ></img>
    {props.potdResult !== undefined ?
    <>
      <div id={"potd-c"}>
        <img className={`potd-img ${props.potdImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.potdImageSizeState === 4 ? "potd-full-image" : ""}`} src={props.potdResult.hdurl} alt={""}></img>
        <div>
          <div className={"potd-description"}>
              <h2>{props.potdResult.title}</h2>
              <p>{props.potdResult.explanation}</p>
          </div>
        </div>
      </div>
    </>
    :
      <img className={"potd-img"} src={''} alt={""}></img>
    }
    </>
  )
}
export default POTDImage;