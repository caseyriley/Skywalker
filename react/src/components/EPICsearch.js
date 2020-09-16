import React, { useState } from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';

const EPICsearch = (props) => {
  const [epicSearchValue, setEpicSearchValue] = useState();
  function updateEpicSearchValue(e) {
    setEpicSearchValue(e.target.value)
  }
  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
      <input type={"text"}
        value={epicSearchValue}
        placeholder={"YYYY-MM-DD EPIC"}
        onChange={e => updateEpicSearchValue(e)}
      >
        {/* onChange={e=>props.handleEpicSearch(e)}> */}
      </input>
      <button className={"main-c__bottom-nav-top__Searchbar__button"} onClick={() => {
        // props.setEpicQuery(props.potdSearchValue); 
        props.setEpicQuery(epicSearchValue);
        props.closeBottomNav()
      }}>
        <LeftArrow />
      </button>
    </div>
  )
}

export default EPICsearch;