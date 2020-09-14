import React from 'react';

const POTDImage = (props) => {
  return (
    <>
    {props.potdResult !== undefined ?
    <img className={"potd-img"} src={props.potdResult} alt={""}></img>
    :
      <img className={"potd-img"} src={''} alt={""}></img>
    }
    </>
  )
}
export default POTDImage;