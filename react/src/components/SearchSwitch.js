import React from 'react';
import NASAImage from './NASAImage';
import NASAImageSearch from './NASAImageSearch';
import POTDSearch from './POTDSearch';
import NASAInfiniteScroll from './NasaInfiniteScroll';

const SearchSwitch = (props) => {
  
  return (
    <>
      {(() => {
        switch (props.searchMenuState ? props.searchMenuState : "imageSearch") {
          case "imageSearch":
            return <NASAImageSearch setResults={props.setResults} results={props.results} /> 
          case "picOfTheDay":
            return <POTDSearch setResults={props.setResults} />
          case "nasaImage":
            return <NASAImage setResults={props.setResults} results={props.results} />
          case "ininiteScroll":
            return <NASAInfiniteScroll query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
        }
      })()}
    </>
  )
}
export default SearchSwitch;