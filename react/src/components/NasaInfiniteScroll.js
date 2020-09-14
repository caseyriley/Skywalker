import React from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';




const NASAInfiniteScroll = (props) => {

  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"

  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
        <input type={"text"} 
          value={props.searchValue}
          placeholder={"Infinite Scroll"}
          onChange={props.updateSearchValue}>
        </input>
      <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"} onClick={() => {props.handleSearch(); props.closeBottomNav()}}>
          <LeftArrow />
        </button>
    </div>
  )
}

export default NASAInfiniteScroll;