import React from 'react';

const AudioInfo = (props) => {
  return(
    <div className={"audio-info"}>
      <div className={"audio-info__scroll"}>
        <h2>{props.mp3Info ? props.mp3Info.data[0].title : "Search and select Audio Above"}</h2>
        <p>{props.mp3Info ? props.mp3Info.data[0].description : "Information about your audio selection will appear here"}</p>
        <p></p>
      </div>
    </div>
  )
}
export default AudioInfo;