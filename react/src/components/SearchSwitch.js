import React from 'react';
import S3FileUpload from 'react-s3';
import ReactAudioPlayer from 'react-audio-player';
import POTDSearch from './POTDSearch';
import ImageDataSearch from './ImageDataSearch';
import EPICSearch from './EPICsearch';
import POTDimageSizeSelect from './POTDimageSizeSelect';
import ImageSizeSelect from './ImageSizeSelect';
import AudioSearch from './AudioSearch';
import UserGallerySizeSelect from './UserGallerySizeSelect';


const SearchSwitch = (props) => {
  return (
    <>
      {(() => {
        switch (props.searchMenuState ? props.searchMenuState : "imageSearch") {
          default: console.log("");
            break;
          case "imageSearch":
            return (
                <>
                <ImageSizeSelect modalImageSizeState={props.modalImageSizeState} setModalImageSizeState={props.setModalImageSizeState} openCloseState={props.openCloseState} imageSizeState={props.imageSizeState} setImageSizeState={props.setImageSizeState} />
                <ImageDataSearch closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue} searchValue={props.searchValue} query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
                </>
              )
          case "picOfTheDay":
            return (
              <>
                <POTDimageSizeSelect potdImageSizeState={props.potdImageSizeState} setPotdImageSizeState={props.setPotdImageSizeState}/>
                <POTDSearch setPotdQuery={props.setPotdQuery}  potdQuery={props.potdQuery} closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue}  handleSearch={props.handleSearch} setResults={props.setResults} results={props.results}  />
              </>
              )
          case "epic":
            return <EPICSearch epicQuery={props.epicQuery} setEpicQuery={props.setEpicQuery} closeBottomNav={props.closeBottomNav}/>
          case "infiniteScroll":
            return (
              <>
                <div className={"react-audio-player-cover"}></div>

                <ReactAudioPlayer
                  src={props.mp3Result[0] ? `https${props.mp3Result[0].slice(4)}` : ""}
                  
                  autoPlay
                  controls
                  style={{backgroundColor: "white", color: "green", borderRadius: "999px"}}
                 
                />
                <AudioSearch closeBottomNav={props.closeBottomNav} updateAudioSearchValue={props.updateAudioSearchValue} audioSearchValue={props.audioSearchValue} audioQuery={props.audioQuery} handleAudioSearch={props.handleAudioSearch} allAudioResults={props.allAudioResults}/>
              </>
              )
          case "mars-weather":
            return <UserGallerySizeSelect  userGalleryImageSizeState={props.userGalleryImageSizeState} setUserGalleryImageSizeState={props.setUserGalleryImageSizeState} userModalopenCloseState={props.userModalopenCloseState} setUserModalImageSizeState={props.setUserModalImageSizeState} userModalImageSizeState={props.userModalImageSizeState}  />
            
        }
      })()}
    </>
  )
}
export default SearchSwitch;