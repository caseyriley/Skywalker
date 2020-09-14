import React from 'react';

const SearchFilter = () => {
  return (
    <nav className={"search-filter"}>
      <div className={`search-filter-option`} ><span>Date Range</span></div>
      <div className={`search-filter-option`} ><span>pic of the day</span></div>
      <div className={`search-filter-option`} ><span>pics of earth</span></div>
      <div className={`search-filter-option`} ><span>infinite scroll</span></div>
      <div className={"search-filter-option"} ><span>mars weather</span></div>
      <div className="animation start-home"></div>
    </nav>
  )
}
export default SearchFilter;