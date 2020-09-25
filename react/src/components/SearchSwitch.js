import React from 'react';
import NASAImage from './NASAImage';
import NASAImageSearch from './NASAImageSearch';
import POTDSearch from './POTDSearch';
import NASAInfiniteScroll from './NasaInfiniteScroll';
import ImageDataSearch from './ImageDataSearch';
import EPICSearch from './EPICsearch';
import POTDimageSizeSelect from './POTDimageSizeSelect';
import ImageSizeSelect from './ImageSizeSelect';
import LandsatSearch from './LandsatSearch';

const SearchSwitch = (props) => {
  
  return (
    <>
      {(() => {
        switch (props.searchMenuState ? props.searchMenuState : "imageSearch") {
          default: console.log("");
            break;
          case "imageSearch":
            return (
                <>
                <ImageSizeSelect modalImageSizeState={props.modalImageSizeState} setModalImageSizeState={props.setModalImageSizeState} openCloseState={props.openCloseState} imageSizeState={props.imageSizeState} setImageSizeState={props.setImageSizeState} />
                <ImageDataSearch closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue} searchValue={props.searchValue} query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
                </>
              )
          case "picOfTheDay":
            return (
              <>
                <POTDimageSizeSelect potdImageSizeState={props.potdImageSizeState} setPotdImageSizeState={props.setPotdImageSizeState}/>
                <POTDSearch setPotdQuery={props.setPotdQuery}  potdQuery={props.potdQuery} closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue}  handleSearch={props.handleSearch} setResults={props.setResults} results={props.results}  />
              </>
              )
          case "epic":
            return <EPICSearch epicQuery={props.epicQuery} setEpicQuery={props.setEpicQuery} closeBottomNav={props.closeBottomNav}/>
          case "infiniteScroll":
            return <LandsatSearch landsatQuery={props.landsatQuery} setLandsatQuery={props.setLandsatQuery} closeBottomNav={props.closeBottomNav}/>
          case "mars-weather":
            return <NASAInfiniteScroll closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue} searchValue={props.searchValue} query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
        }
      })()}
    </>
  )
}
export default SearchSwitch;