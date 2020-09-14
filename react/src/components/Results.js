import React from 'react';
// import POTDImg from './POTDImg';
import NASAImageGallery from './NASAImageGallery';
import ImageSwitch from './ImageSwitch';

const Results = (props) => {

  return(
    <>

      <NASAImageGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> 
      {/* <POTDImg potdResult={props.potdResult} results={props.results} />   */}
    </>
  )
}
export default Results;