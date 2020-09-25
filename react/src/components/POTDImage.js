import React from 'react';
import doubleChevron from '../images/doubleChevron.png'
import Loading from './Loading';

const POTDImage = (props) => {
  console.log("POTDprops", props)
  return (
    <>
      <img id={"chevron-right"} src={doubleChevron} alt={""} onClick={props.potdNextDay}></img>
      <img id={"chevron-left"} src={doubleChevron} alt={""} onClick={props.potdPrevDay} ></img>
      {props.potdError !== true ?
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
        <>
          <Loading/>
          <div className={"epic-img-c__date-not-available"}>
            <h1>Date Not Available</h1>
            <h1>Please Try Again</h1>
          </div>
        </>
    }
    </>
  )
}
export default POTDImage;