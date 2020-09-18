import React, {useState} from 'react';
import doubleChevron from '../images/doubleChevron.png';
// import spaceArrow from '../images/SpaceArrow';

const EPICimage = (props) => {
  const API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
  let httpStart = `https://api.nasa.gov/EPIC/archive/natural/${props.epicQuery}`
  let resultArray = props.epicResult.map(identifier => 
    // console.log(identifier.image))
    `${httpStart}/png/${identifier.image}.png?api_key=${API_KEY}`)
   //  https://api.nasa.gov/EPIC/archive/natural/2020-03-03/png/epic_1b_20190530011359.png?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz
  
  const [picNumState, setPicNumState] = useState(0);

  function picRotateRight(){
    setPicNumState(picNumState + 1);
    console.log(picNumState);
    if (picNumState > resultArray.length  -1){
      setPicNumState(0);
    }
  }

  function picRotateLeft(){
    setPicNumState(picNumState - 1);
    if (picNumState < 0){
      setPicNumState(resultArray.length);
    }
    
  }


  return (
    <>
      <img id={"chevron-right"} src={doubleChevron} alt={"not here"} onClick={picRotateRight}></img>
      <img id={"chevron-left"} src={doubleChevron} alt={"not here"} onClick={picRotateLeft} ></img>
      {/* <div id={"chevron-right"} ></div> */}
      {props.epicResult !== undefined ?
      <div className={"epic-img-c"}>
        {}
          <img className={"epic-img-c__img"} src={resultArray[picNumState]} alt={""}></img>
        {/* `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${props.epicResult[0].image}.png?api_key=DEMO_KEY` */}
      </div>
        :
        <img className={"epic-img-img"} src={''} alt={""}></img>
        

      }
    </>
  )
}
export default EPICimage;