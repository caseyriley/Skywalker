import React from 'react';

const POTDImage = (props) => {
  console.log("POTDprops", props)
  return (
    <>
    {props.potdResult !== undefined ?
    <>
      <div id={"potd-c"}>
        <img className={`potd-img ${props.potdImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.potdImageSizeState === 4 ? "potd-full-image" : ""}`} src={props.potdResult.hdurl} alt={""}></img>
        <div>
          <div id={"potd-description"}>
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