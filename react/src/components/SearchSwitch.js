import React from 'react';
import NASAImage from './NASAImage';
import NASAImageSearch from './NASAImageSearch';
import POTDSearch from './POTDSearch';
import NASAInfiniteScroll from './NasaInfiniteScroll';
import ImageDataSearch from './ImageDataSearch';

const SearchSwitch = (props) => {
  
  return (
    <>
      {(() => {
        switch (props.searchMenuState ? props.searchMenuState : "imageSearch") {
          default: console.log("");
            break;
          case "imageSearch":
            return <ImageDataSearch closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue} searchValue={props.searchValue} query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
          case "picOfTheDay":
            return <POTDSearch setPotdQuery={props.setPotdQuery}  potdQuery={props.potdQuery} closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue}  handleSearch={props.handleSearch} setResults={props.setResults} results={props.results}  />
          case "nasaImage":
            return <NASAImage setResults={props.setResults} results={props.results} />
          case "infiniteScroll":
            return <NASAInfiniteScroll closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue} searchValue={props.searchValue} query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
        }
      })()}
    </>
  )
}
export default SearchSwitch;