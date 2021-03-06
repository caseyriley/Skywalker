import React, {useState} from 'react';

const EpicSearchText = () => {
  const [infoState, setInfoState] = useState(true);
  return (
    <div className={"info-button"} onClick={() => setInfoState(!infoState)}>
      {infoState ?
        <span> About This Page</span>
        :
        <div id={"image-search-text"} onClick={() => setInfoState(!infoState)}>
          <p>Images can be searched by date.</p>
          <p>Click on the left and right arrows to rotate around Earth.</p>
          <p>This is earth as seen from the Earth Polychromatic Imaging Camera (EPIC).</p>
          <p>Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc 
            imagery of the Earth and captures unique perspectives of certain astronomical 
            events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) 
            detector coupled to a 30-cm aperture Cassegrain telescope.</p>
          <p>Switching to enhanced images yeilds the same images edited with a custom 
            algorithm designed to reproduce the true splendor of earth.</p>
          <p>Enhanced images are not as plentiful as natural images so you may have to search 
            another date.</p>
          <p></p>
        </div>
      }
    </div> 
  )
}
export default EpicSearchText;