import React, {useState} from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';




const FilterStartDate = (props) => {
  const [filterDateSearchState, setFilterDateSearchState] = useState();

  return (
    <div id={"filter-date-c"}>
      <span>Start Date</span>
      <div id={"filter-date"} >
        <MagnifyingGlass />
        <input name={"startDateInput"} type={"text"}
          // value={props.searchValue}
          placeholder={"YYYY"}
          onChange={e => setFilterDateSearchState(e.target.value)}

          >
        </input>
        <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"} onClick={e => props.setStartDateFilterState(filterDateSearchState)}>
          <LeftArrow />
        </button>
      </div>
    </div>
  )
}

export default FilterStartDate;