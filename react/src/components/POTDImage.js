import React from 'react';

const POTDImage = (props) => {
  console.log("POTDprops", props)
  return (
    <>
    {props.potdResult !== undefined ?
    <>
        <img className={"potd-img"} src={props.potdResult.hdurl} alt={""}></img>
      <div>
        <div id={"potd-description"}>
              <h2>{props.potdResult.title}</h2>
            <p>{props.potdResult.explanation}</p>
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