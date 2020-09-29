import React from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';
import RightArrow from '../images/RightArrow.png';

const AudioSearch = (props) => {

  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"

  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
      <input type={"text"}
        value={props.audioSearchValue}
        placeholder={"Search Database"}
        onChange={props.updateAudioSearchValue}>
      </input>
      <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"} onClick={() => { props.handleAudioSearch(); props.closeBottomNav() }}>
        <img className={"right-arrow"} src={RightArrow} alt={""} />
        {/* <LeftArrow /> */}
      </button>
    </div>
  )
}

export default AudioSearch;