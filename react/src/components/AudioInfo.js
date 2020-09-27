import React from 'react';

const AudioInfo = (props) => {
  // console.log('mp3Info======>', props.mp3Info)
  return(
    <div className={"audio-info"}>
      <div className={"audio-info__scroll"}>
        <h2>{props.mp3Info ? props.mp3Info.data[0].title : "Select Audio Above"}</h2>
        <p>{props.mp3Info ? props.mp3Info.data[0].description : "Once selected, information about your audio selection will appear here"}</p>
        <p></p>
      </div>
    </div>
  )
}
export default AudioInfo;