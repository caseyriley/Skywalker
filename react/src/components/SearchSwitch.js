import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
// import NASAImage from './NASAImage';
// import NASAImageSearch from './NASAImageSearch';
import POTDSearch from './POTDSearch';
import NASAInfiniteScroll from './NasaInfiniteScroll';
import ImageDataSearch from './ImageDataSearch';
import EPICSearch from './EPICsearch';
import POTDimageSizeSelect from './POTDimageSizeSelect';
import ImageSizeSelect from './ImageSizeSelect';
import AudioSearch from './AudioSearch';


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
            return (
              <>
                <div className={"react-audio-player-cover"}></div>
                <ReactAudioPlayer
                  src={`${props.mp3Result[0]}`}
                  autoPlay
                  controls
                />
                <AudioSearch closeBottomNav={props.closeBottomNav} updateAudioSearchValue={props.updateAudioSearchValue} audioSearchValue={props.audioSearchValue} audioQuery={props.audioQuery} handleAudioSearch={props.handleAudioSearch} allAudioResults={props.allAudioResults}/>
              </>
              )
          case "mars-weather":
            return <NASAInfiniteScroll closeBottomNav={props.closeBottomNav} updateSearchValue={props.updateSearchValue} searchValue={props.searchValue} query={props.query} handleSearch={props.handleSearch} setResults={props.setResults} results={props.results} />
        }
      })()}
    </>
  )
}
export default SearchSwitch;