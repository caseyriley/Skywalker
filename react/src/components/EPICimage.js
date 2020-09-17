import React from 'react';
import doubleChevron from '../images/doubleChevron.png';
// import spaceArrow from '../images/SpaceArrow';

const EPICimage = (props) => {
  const API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
  let resultArray = props.epicResult.map(identifier => 
    // console.log(identifier.image))
    `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${identifier.image}.png?api_key=${API_KEY}`)
     
  let picNum = 0;

  function picRotateRight(){
    picNum ++;
    console.log(picNum);
    if (picNum > resultArray.length  -1){
      picNum = 0;
    }
  }
  return (
    <>
      <img id={"chevron-right"} src={doubleChevron} alt={"not here"} onClick={picRotateRight}></img>
      <img id={"chevron-left"} src={doubleChevron} alt={"not here"}></img>
      {/* <div id={"chevron-right"} ></div> */}
      {props.epicResult !== undefined ?
      <div className={"epic-img-c"}>
        {}
          <img className={"epic-img-c__img"} src={resultArray[picNum]} alt={""}></img>
        {/* `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${props.epicResult[0].image}.png?api_key=DEMO_KEY` */}
      </div>
        :
        <img className={"potd-img"} src={''} alt={""}></img>
        

      }
    </>
  )
}
export default EPICimage;