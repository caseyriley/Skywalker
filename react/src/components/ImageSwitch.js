import React from 'react';
import NASAImageGallery from './NASAImageGallery';
import POTDImage from './POTDImage';


const ImageSwitch = (props) => {

  return (
    <>
      {(() => {
        switch (props.searchMenuState ? props.searchMenuState : "imageSearch") {
          case "imageSearch":
            return <NASAImageGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "picOfTheDay":
            return <POTDImage potdResult={props.potdResult} results={props.results} /> 
          case "nasaImage":
            return <NASAImageGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
          case "infiniteScroll":
            return <NASAImageGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
        }
      })()}
    </>
  )
}
export default ImageSwitch;