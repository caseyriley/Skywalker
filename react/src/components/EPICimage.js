import React from 'react';

const EPICimage = (props) => {
  return (
    <>
      {props.epicResult !== undefined ?
      <>
        <p>{props.epicResult[0].image}</p>
          <img className={"potd-img"} src={`https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${props.epicResult[0].image}.png?api_key=DEMO_KEY`} alt={""}></img>
        {/* `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${props.epicResult[0].image}.png?api_key=DEMO_KEY` */}
      </>
        :
        <p>not showing</p>
        // <img className={"potd-img"} src={''} alt={""}></img>
      }
    </>
  )
}
export default EPICimage;