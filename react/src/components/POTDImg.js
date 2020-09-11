import React from 'react';

const POTDImg = (props) => {
  return (
    <img className={"potd-img"} src={props.results} alt={""}></img>
  )
}
export default POTDImg;