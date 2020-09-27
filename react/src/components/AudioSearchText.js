import React, { useState } from 'react';

const AudioSearchText = () => {
  const [infoState, setInfoState] = useState(true);
  return (
    <div className={"info-button"} onClick={() => setInfoState(!infoState)}>
      {infoState ?
        <span> About This Page</span>
        :
        <div id={"image-search-text"} onClick={() => setInfoState(!infoState)}>
          <p>Nasa's audio can be searched by keyword.</p>
          <p>Click on one of the results and the audio will start automatically.</p>
          <p>Audio controls include play, pause, skip to selected time, and volume.</p>
          <p>Downloading audio is easy. Once audio is playing, click the three dots
             on the rights side of the audio player and select download.</p>
          <p></p>
        </div>
      }
    </div>
  )
}
export default AudioSearchText;