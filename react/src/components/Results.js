import React from 'react';
import POTDImg from './POTDImg';
import NASAImageGallery from './NASAImageGallery';

const Results = (props) => {

  return(
    <>
      {Array.isArray(props.results) ? 
        <NASAImageGallery imageSizeState={props.imageSizeState} results={props.results} /> :
        <POTDImg results={props.results} />
      }

      
      
    </>
  )
}
export default Results;