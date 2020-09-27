import React, { useEffect, useState} from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import shuttle from '../images/shuttle.png'
// import useMp3 from './useMp3';



const SoundGallery = (props) => {
  console.log('soundGalleryProps====>', props.allAudioResults)

  // const [mp3Query, setMp3query] = useState();
  // const {
  //   mp3Result,
  //   mp3Error
  // } = useMp3(mp3Query)

  return (
    <>

      {/* {props.mp3Result ? 
        <ReactAudioPlayer
          src={`${props.mp3Result[0]}`}
          autoPlay
          controls
        />
        :
        <div></div>
      } */}
      <ul className={"sound-countainer"} >
        {props.allAudioResults ? props.allAudioResults.map((item, index) => {
          if (props.allAudioResults.length === index + 1) {
            return (
              <>
                <li className={"sound-button"} onClick={() => (props.setMp3query(item.href), props.setMp3Info(item))} key={`${item.data[0].title} ${Math.floor(Math.random() * Math.floor(1000))}`} >
                  <h3 ref={props.lastAudioSearchElementRef} className={"sound-description"} >{`${item.data[0].title}`}</h3>
                  <img className={"shuttle"} src={shuttle} alt={""} />
                </li>
              </>
            )
          } else {
          return(
            <li className={"sound-button"} onClick={() => (props.setMp3query(item.href), props.setMp3Info(item))} key={`${item.data[0].title} ${Math.floor(Math.random() * Math.floor(1000))}`} >
              <h3 className={"sound-description"} >{`${item.data[0].title}`}</h3>
              <img className={"shuttle"} src={shuttle} alt={""}/>
            </li>
          )
          }
        })
        :
        <div></div>
        }
      </ul>
    </>
  )
}
export default SoundGallery;