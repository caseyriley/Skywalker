import React, { useState, useEffect, useRef, useCallback } from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';




const NASAInfiniteScroll = (props) => {

  

  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"


// ----------------on---main---page----------------
  // const {
  //   allResults,
  //   hasMore,
  //   loading,
  //   error
  // } = useSearchFunction(query, pageNumber)


  // const observer = useRef()
  // const lastSearchElementRef = useCallback(node => {
  //   if (loading) return
  //   if (observer.current) observer.current.disconnect()
  //   observer.current = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting && hasMore) {
  //       setPageNumber(prevPageNumber => prevPageNumber + 1)
  //     }
  //   })
  //   if (node) observer.current.observe(node)
  // }, [loading, hasMore])

  // function handleSearch(e) {
  //   setQuery(e.target.value)
  //   setPageNumber(1)
  // }
// -------------------------------------------------------


  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
      {/* <form className={"main-c__bottom-nav-top__Searchbar__form"}
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
          setPageNumber(1);
        }}> */}
        <input type={"text"} 
        // name={"main-c__bottom-nav-top__Searchbar__input"}
          value={props.query}
          placeholder={"Infinite Scroll"}
          onChange={props.handleSearch}
        ></input>
        {/* <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"}>
          <LeftArrow />
        </button> */}
      {/* </form> */}
    </div>
  )
}

export default NASAInfiniteScroll;