import React, {useState} from 'react';
import doubleChevron from '../images/doubleChevron.png';
import Loading from './Loading';
// import spaceArrow from '../images/SpaceArrow';

const EPICimage = (props) => {
  console.log("props EPIC", props.epicQuery)
  const API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz";
  const slashQuery = props.epicQuery.replace("-", "/").replace("-", "/");
  let httpStart = `https://api.nasa.gov/EPIC/archive/${props.epicEnhancedState}/${slashQuery}`;
  let resultArray = props.epicResult.map(identifier => 
    // console.log(identifier.image))
    `${httpStart}/png/${identifier.image}.png?api_key=${API_KEY}`)
     //https://api.nasa.gov/EPIC/archive/natural/2019-05-30/png/epic_1b_20190530011359.png?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz
     //https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz
     //https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY
     //https://api.nasa.gov/EPIC/archive/natural/2019-05-30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY                  
     //https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY
                                                                                      
    //'https://api.nasa.gov/EPIC/archive/natural/2019-05-30/png/epic_1b_20190530011359.png?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz'
   //  https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?
  //   https://api.nasa.gov/EPIC/archive/natural/2019-05-30/png/epic_1b_20190530011359.png?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz
  
  const [picNumState, setPicNumState] = useState(0);

  function picRotateRight(){
    setPicNumState(picNumState + 1);
    console.log(picNumState);
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
  console.log(props.epicResult)

  return (
    <>
      <img id={"chevron-right"} src={doubleChevron} alt={"not here"} onClick={picRotateRight}></img>
      <img id={"chevron-left"} src={doubleChevron} alt={"not here"} onClick={picRotateLeft} ></img>
      {/* <div id={"chevron-right"} ></div> */}
      {props.epicResult.length !== 0?
      <div className={"epic-img-c"}>
        {}
          <img className={"epic-img-c__img"} src={resultArray[picNumState]} alt={""}></img>
        {/* `https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${props.epicResult[0].image}.png?api_key=DEMO_KEY` */}
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