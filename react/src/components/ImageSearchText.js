import { useState } from "react";
import React from 'react';


const ImageSearchText = () => {
  const [infoState, setInfoState] = useState(true);

  return (
    <div className={"info-button"} onClick={()=>setInfoState(!infoState)}>
      {infoState ? 
        <span> About This Page</span>
        :
        <div id={"image-search-text"} onClick={() => setInfoState(!infoState)}>
         <p>Images can be searched by keywords as well as filtered by start date and end date.</p>
         <p>Clicking on a image will display any information associated with the image as well 
            as a the original resolution of the image.</p>
         <p>This bottom widow can be closed or opened by clicking on the top/center triangle.</p>
         <p></p>
       </div>
      }
    </div> 
  )
}
export default ImageSearchText;