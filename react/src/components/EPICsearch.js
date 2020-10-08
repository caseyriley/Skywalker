import React, { useState } from 'react';
import MagnifyingGlass from '../images/MagnifyingGlass';
import RightArrow from '../images/RightArrow.png';

const EPICsearch = (props) => {
  
  const [epicSearchValue, setEpicSearchValue] = useState();
  function updateEpicSearchValue(e) {
    setEpicSearchValue(e.target.value)
  }
  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
      <input type={"date"}
        value={epicSearchValue}
        placeholder={"YYYY-MM-DD"}
        min="1995-06-20" max="2030-01-01"
        onChange={e => updateEpicSearchValue(e)}
      >
      </input>
      <button className={"main-c__bottom-nav-top__Searchbar__button"} onClick={() => {
        props.setEpicQuery(epicSearchValue);
        props.closeBottomNav()
      }}>
        <img className={"right-arrow"} src={RightArrow} alt={""} />
      </button>
    </div>
  )
}

export default EPICsearch;