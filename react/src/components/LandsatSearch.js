import React, { useState } from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';

const LandsatSearch = (props) => {

  const [landsatSearchValue, setLandsatSearchValue] = useState();
  function updateLandsatSearchValue(e) {
    setLandsatSearchValue(e.target.value)
  }
  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
      <input type={"date"}
        value={landsatSearchValue}
        placeholder={"YYYY-MM-DD"}
        min="1995-06-20" max="2030-01-01"
        onChange={e => updateLandsatSearchValue(e)}
      >
        {/* onChange={e=>props.handleLandsatSearch(e)}> */}
      </input>
      <button className={"main-c__bottom-nav-top__Searchbar__button"} onClick={() => {
        props.setLandsatQuery(landsatSearchValue);
        props.closeBottomNav()
      }}>
        <LeftArrow />
      </button>
    </div>
  )
}


export default LandsatSearch;