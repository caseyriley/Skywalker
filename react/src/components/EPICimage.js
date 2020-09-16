import React from 'react';
import ChevronRight from 'react';
// import spaceArrow from '../images/SpaceArrow';

const EPICimage = (props) => {
  const API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
  let resultArray = props.epicResult.map(identifier => 
    // console.log(identifier.image))
    `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${identifier.image}.png?api_key=${API_KEY}`)
     
  // console.log("resultArray===>", identifier.image)
  // let resultArray = props.epicResult[0].image;
  return (
    <>
      {/* <img id={"chevron-right"} src={'../images/spaceArrow.png'} alt={""}></img> */}
      <div id={"chevron-right"} ></div>
      {props.epicResult !== undefined ?
      <div className={"epic-img-c"}>
        {}
          <img className={"epic-img-c__img"} src={resultArray[0]} alt={""}></img>
        {/* `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${props.epicResult[0].image}.png?api_key=DEMO_KEY` */}
      </div>
        :
        <img className={"potd-img"} src={''} alt={""}></img>
        

      }
    </>
  )
}
export default EPICimage;