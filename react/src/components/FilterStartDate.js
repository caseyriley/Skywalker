import React, {useState} from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';
import CheckMark from '../images/CheckMark';




const FilterStartDate = (props) => {
  const [filterDateSearchState, setFilterDateSearchState] = useState([]);
  
  const [searchActiveState, setSearchActiveState] = useState(false);
  function check(){
    if (filterDateSearchState.length === 4){
      setSearchActiveState(true)
    }
  }
  
  function resetStartDate(){
    setFilterDateSearchState([]);
    setSearchActiveState(false);
    const inpt = document.getElementById("startDateInput").value = "";
  }
  
  
  return (
    <div id={"filter-date-c"} >
      <span>Start Date</span>
      <div id={"filter-date"} >
        <MagnifyingGlass />
        <input id={"startDateInput"} name={"startDateInput"} type={"text"}
          placeholder={"YYYY"}
          onChange={e => setFilterDateSearchState(e.target.value)}
          type="number" min="1920" max="2030" step="1" minLength="4" maxLength="4"
        >
        </input>
        <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"} onClick={e => props.setStartDateFilterState(filterDateSearchState), check}>
          <LeftArrow />
        </button>
      </div>
      <CheckMark resetStartDate={resetStartDate} setSearchActiveState={setSearchActiveState} searchActiveState={searchActiveState}/>
    </div>
  )
}

export default FilterStartDate;