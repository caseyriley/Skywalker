import React from 'react';
import POTDImg from './POTDImg';
import NASAImageGallery from './NASAImageGallery';

const Results = (props) => {

  return(
    <>
      {Array.isArray(props.allResults) ? 
        <NASAImageGallery error={props.error} loading={props.loading} lastSearchElementRef={props.lastSearchElementRef} allResults={props.allResults} imageSizeState={props.imageSizeState} results={props.results} /> :
        <POTDImg results={props.results} />
      }

      
      
    </>
  )
}
export default Results;