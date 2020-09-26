import React, { useEffect, useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import useMp3 from './useMp3';



const SoundGallery = (props) => {
  console.log('soundGalleryProps====>', props.allAudioResults)
  function playAudio(){
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  const [mp3Query, setMp3query] = useState();
  const {
    mp3Result,
    mp3Error
  } = useMp3(mp3Query)

  return (
    <>

      {mp3Result ? 
        <ReactAudioPlayer
          src={`${mp3Result[0]}`}
          autoPlay
          controls
        />
      // <div>
      //   <button onClick={()=>playAudio()}>
      //     <span>Play Audio</span>
      //   </button>
      //   <audio className="audio-element">
      //     <source src={`${mp3Result[0]}`}></source>
      //   </audio>
      // </div>
        // <h4 className={"mp3string"}>{mp3Result[0]}</h4>
        :
        <div></div>
      }
      <ul className={"sound-countainer"} >
        {props.allAudioResults ? props.allAudioResults.map(item => {
          return(
            <li className={"sound-button"} onClick={() => setMp3query(item.href)}>
              <h3 className={"sound-description"} key={`${item.data[0].title} ${Math.floor(Math.random() * Math.floor(1000))}`}>{`${item.data[0].title}`}</h3>
            </li>
          )
          
        })
        :
        <div></div>
        }
      </ul>
    </>
  )
}
export default SoundGallery;