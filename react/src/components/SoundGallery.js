import React from 'react';
import shuttle from '../images/shuttle.png'





const SoundGallery = (props) => {

  
  return (
    <>
      <div className={"parallax-background"}> </div>
        <ul className={"sound-countainer"} >
          {props.allAudioResults ? props.allAudioResults.map((item, index) => {
            if (props.allAudioResults.length === index + 1) {
              return (
                <>
                  <li className={"sound-button"} onClick={() => (props.setMp3query(`https${item.href.slice(6)}`), props.setMp3Info(item))} key={`${item.data[0].title} ${Math.floor(Math.random() * Math.floor(1000))}`} >
                    <h3 ref={props.lastAudioSearchElementRef} className={"sound-description"} >{`${item.data[0].title}`}</h3>
                    <img className={"shuttle"} src={shuttle} alt={""} />
                  </li>
                </>
              )
            } else {
            return(
              <li className={"sound-button"} style={{ transform: `translateY(0px)` }} onClick={() => (props.setMp3query(item.href), props.setMp3Info(item))} key={`${item.data[0].title} ${Math.floor(Math.random() * Math.floor(1000))}`} >
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