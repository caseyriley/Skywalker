import React from 'react';
import ImageDataGallery from './ImageDataGallery';
import NASAImageGallery from './NASAImageGallery';
import POTDImage from './POTDImage';
import EPICimage from './EPICimage';
import SoundGallery from './SoundGallery';
import UserGallery from './UserGallery';


const ImageSwitch = (props) => {

  return (
    <>
      {(() => {
        switch (props.searchMenuState ? props.searchMenuState : "imageSearch") {
          case "imageSearch":
            return <ImageDataGallery user={props.user} modalImageSizeState={props.modalImageSizeState} openCloseState={props.openCloseState} setOpenCloseState={props.setOpenCloseState} error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "picOfTheDay":
            return <POTDImage potdError={props.potdError} potdNextDay={props.potdNextDay} potdPrevDay={props.potdPrevDay} setPotdImageSizeState={props.setPotdImageSizeState} potdImageSizeState={props.potdImageSizeState} potdResult={props.potdResult} results={props.results} /> 
          case "epic":
            return <EPICimage epicEnhancedState={props.epicEnhancedState} epicQuery={props.epicQuery} epicResult={props.epicResult} error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "infiniteScroll":
            return <SoundGallery setMp3Info={props.setMp3Info} mp3Query={props.mp3Query} setMp3query={props.setMp3query} mp3Result={props.mp3Result} audioError={props.audioError} openCloseState={props.openCloseState} setOpenCloseState={props.setOpenCloseState} audioLoading={props.audioLoading} lastAudioSearchElementRef={props.lastAudioSearchElementRef} allAudioResults={props.allAudioResults}/> 
          case "mars-weather":
            return <UserGallery userGalleryImageSizeState={props.userGalleryImageSizeState} userModalopenCloseState={props.userModalopenCloseState} setUserModalopenCloseState={props.setUserModalopenCloseState} userModalImageSizeState={props.userModalImageSizeState} closeBottomNav={props.closeBottomNav}
             /> 
        }
      })()}
    </>
  )
}
export default ImageSwitch;