import React, { useState } from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';
import CheckMark from '../images/CheckMark';

const FilterEndDate = (props) => {
  const [filterEndDateState, setFilterEndDateState] = useState();

  const [searchActiveState, setSearchActiveState] = useState(false);
  function check() {
    if (filterEndDateState.length === 4) {
      setSearchActiveState(true)
    }
  }

  function resetStartDate() {
    setFilterEndDateState([]);
    setSearchActiveState(false);
    const inpt = document.getElementById("endDateInput").value = "";
  }

  return (
    <div id={"filter-end-date-c"}>
      <span>End Date</span>
      <div id={"filter-end-date"} >
        <MagnifyingGlass />
        <input id={"endDateInput"} type={"text"}
          placeholder={"YYYY"}
          onChange={e => setFilterEndDateState(e.target.value)}
          type="number" min="1920" max="2030" step="1" minLength="4" maxLength="4"
        >
        </input>
        <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"} onClick={e => props.setEndDateFilterState(filterEndDateState), check}>
          <LeftArrow />
        </button>
      </div>
      <CheckMark resetStartDate={resetStartDate} setSearchActiveState={setSearchActiveState} searchActiveState={searchActiveState} />
    </div>
  )
}

export default FilterEndDate;