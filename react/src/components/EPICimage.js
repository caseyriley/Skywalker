import React, {useState} from 'react';
import doubleChevron from '../images/doubleChevron.png';
import Loading from './Loading';

const EPICimage = (props) => {
  const API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz";
  const slashQuery = props.epicQuery ? props.epicQuery.replace("-", "/").replace("-", "/") : "06/08/2020";
  let httpStart = `https://api.nasa.gov/EPIC/archive/${props.epicEnhancedState}/${slashQuery}`;
  let resultArray = props.epicResult.map(identifier => 
    `${httpStart}/png/${identifier.image}.png?api_key=${API_KEY}`)
  
  const [picNumState, setPicNumState] = useState(0);

  function picRotateRight(){
    setPicNumState(picNumState + 1);
    if (picNumState > resultArray.length  -2){
      setPicNumState(0);
    }
  }

  function picRotateLeft(){
    if (picNumState < 1){
      setPicNumState(resultArray.length -2);
    } else {
      setPicNumState(picNumState -1)
    }
    
  }

  return (
    <>
      <img id={"chevron-right"} src={doubleChevron} alt={"not here"} onClick={picRotateRight}></img>
      <img id={"chevron-left"} src={doubleChevron} alt={"not here"} onClick={picRotateLeft} ></img>
      {props.epicResult.length !== 0?
      <div className={"epic-img-c"}>
        {}
          <img className={"epic-img-c__img"} src={resultArray[picNumState]} alt={""}></img>
      </div>
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
export default EPICimage;