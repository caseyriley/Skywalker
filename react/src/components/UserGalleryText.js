import React, { useState } from 'react';

const UserGalleryText = () => {
  const [infoState, setInfoState] = useState(true);
  return (
    <div className={"info-button"} onClick={() => setInfoState(!infoState)}>
      {infoState ?
        <span> About This Page</span>
        :
        <div id={"image-search-text"} onClick={() => setInfoState(!infoState)}>
          <p>This is your personal gallery.</p>
          <p>Add images by hearting them or delete images by unhearting them.</p>
          <p>Once you have several images in your gallery try the carousel button 
            with the blue saturn on it for a high resolution full screen rotation 
            of your favorite NASA images.</p>
          <p>Please make use of the social media share links and tell your friends 
            what you find interesting about your favorite images.</p>
          <p></p>
        </div>
      }
    </div>
  )
}
export default UserGalleryText;