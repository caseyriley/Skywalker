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
            return <ImageDataGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "picOfTheDay":
            return <POTDImage potdResult={props.potdResult} results={props.results} /> 
          case "nasaImage":
            return <EPICimage epicResult={props.epicResult} error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "infiniteScroll":
            return <NASAImageGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
        }
      })()}
    </>
  )
}
export default ImageSwitch;