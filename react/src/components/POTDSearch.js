import React, {useState} from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';

const POTDSearch = (props) => {
  const [potdSearchValue, setPotdSearchValue] = useState();
  function updatePotdSearchValue(e) {
    setPotdSearchValue(e.target.value)
  }
  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
      <input 
        type="date"
        value={potdSearchValue}
        placeholder={"YYYY-MM-DD"}
        onChange={e=>updatePotdSearchValue(e)}
        min="1995-06-20" max="2030-01-01"
        >

      </input>
      <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"} onClick={() => { 
        // props.setPotdQuery(props.potdSearchValue); 
        props.setPotdQuery(potdSearchValue); 
        props.closeBottomNav() 
        }}>
        <LeftArrow />
      </button>
    </div>
  )
}

export default POTDSearch;