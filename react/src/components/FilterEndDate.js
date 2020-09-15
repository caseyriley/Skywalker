import React, { useState } from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';

const FilterEndDate = (props) => {
  const [filterEndDateState, setFilterEndDateState] = useState();

  return (
    <div id={"filter-end-date-c"}>
      <span>End end-</span>
      <div id={"filter-end-date"} >
        <MagnifyingGlass />
        <input type={"text"}
          // value={props.searchValue}
          placeholder={"YYYY"}
          onChange={e => setFilterEndDateState(e.target.value)}

        >
        </input>
        <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"} onClick={e => props.setEndDateFilterState(filterEndDateState)}>
          <LeftArrow />
        </button>
      </div>
    </div>
  )
}

export default FilterEndDate;