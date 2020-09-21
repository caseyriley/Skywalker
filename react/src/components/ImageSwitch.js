import React from 'react';
import ImageDataGallery from './ImageDataGallery';
import NASAImageGallery from './NASAImageGallery';
import POTDImage from './POTDImage';
import EPICimage from './EPICimage';


const ImageSwitch = (props) => {

  return (
    <>
      {(() => {
        switch (props.searchMenuState ? props.searchMenuState : "imageSearch") {
          case "imageSearch":
            return <ImageDataGallery modalImageSizeState={props.modalImageSizeState} openCloseState={props.openCloseState} setOpenCloseState={props.setOpenCloseState} error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "picOfTheDay":
            return <POTDImage potdNextDay={props.potdNextDay} potdPrevDay={props.potdPrevDay} setPotdImageSizeState={props.setPotdImageSizeState} potdImageSizeState={props.potdImageSizeState} potdResult={props.potdResult} results={props.results} /> 
          case "epic":
            return <EPICimage epicEnhancedState={props.epicEnhancedState} epicQuery={props.epicQuery} epicResult={props.epicResult} error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "infiniteScroll":
            return <NASAImageGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "mars-weather":
            return <NASAImageGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
        }
      })()}
    </>
  )
}
export default ImageSwitch;