import React from 'react';
import NASAImage from './NASAImage';
import NASAImageSearch from './NASAImageSearch';
import POTDSearch from './POTDSearch';
import NASAInfiniteScroll from './NasaInfiniteScroll';
import ImageDataSearch from './ImageDataSearch';
import EPICSearch from './EPICsearch';

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
          case "epic":
            return <EPICSearch setEpicSearchValue={props.setEpicSearchValue} epicSearchValue={props.epicSearchValue} epicQuery={props.epicQuery} setEpicQuery={props.setEpicQuery} closeBottomNav={props.closeBottomNav}/>
          case "infiniteScroll":
            return <NASAInfiniteScroll closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue} searchValue={props.searchValue} query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
          case "mars-weather":
            return <NASAInfiniteScroll closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue} searchValue={props.searchValue} query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
        }
      })()}
    </>
  )
}
export default SearchSwitch;