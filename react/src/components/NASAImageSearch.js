import React from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';

const NASAImageSearch = (props) => {
  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass/>
      <form id={"main-c__bottom-nav-top__Searchbar__form"}
        onSubmit={e => {
          e.preventDefault();
          props.setQuery(props.search);
        }}>
        <input name={"main-c__bottom-nav-top__Searchbar__input"} value={props.search} placeholder={"search"}
          onChange={e => props.setSearch(e.target.value)}
        ></input>
        <button id={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"}>
          <LeftArrow />
        </button>
      </form>
    </div>
  )
}
export default NASAImageSearch;