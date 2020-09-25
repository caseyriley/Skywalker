import React, {useState} from 'react';

const POTDSearchText = () => {
  const [infoState, setInfoState] = useState(true);
  return (
    
    <div className={"info-button"} onClick={()=>setInfoState(!infoState)}>
      {infoState ? 
        <span> About This Page</span>
        :
        <div id={"image-search-text"} onClick={() => setInfoState(!infoState)}>
        <p>NASA's picture of the day can searched by date.</p>
        <p>Scroll down to read about the image.</p>
        <p>This special selection of images is super popular and contains many results you will not find anywhere else.</p>
        <p>There may not be a image for the current day yet.</p>
        <p>Use the arrows to skip backward or forward days.</p>
        <p></p>
       </div>
      }
    </div> 
    
    
   
  )
}
export default POTDSearchText;