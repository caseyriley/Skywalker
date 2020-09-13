import React, {useState, useEffect, useRef, useCallback} from 'react';
import ChevronSkywalker from '../images/ChevronSkywalker';
import ChevronSkywalkerInverse from '../images/ChevronSkywalkerInverse';
import Results from './Results';
import SearchMenu from './SearchMenu';
import SearchSwitch from './SearchSwitch';
import useSearchFunction from './useSearchFunction';

// import { API_URL } from '../config.js'

const MainPage = () => {
  
  const [bottomNavState, setBottomNavState] = useState(true);
  const openCloseBottomNav = () => {
    let nextState = !bottomNavState;
    setBottomNavState(nextState)
  }
// ----------------set-image-size-------------------------------
  const [imageSizeState, setImageSizeState] = useState(2);
  // ---------------------------------------------------------------
  //--------------set-menu-position----------------------------------
  const [searchMenuState, setSearchMenuState] = useState("imageSearch")
// -------------------------------------------------------------------
  // ------------original--search--results--go--here------------
  const [results, setResults] = useState();
  // ---------------------------------------------------------------


  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    allResults,
    hasMore,
    loading,
    error
  } = useSearchFunction(query, pageNumber)

  const observer = useRef()

  const lastSearchElementRef = useCallback(node => {
    console.log(node)
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        console.log('Visible')
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }
  
    return (
      <div id={"main-c"}>
        <div id={"main-c__scroll"}>
          <div  className={`main-c__bottom-nav ${bottomNavState ? "open" : "closed" }`}   >
            <div className={`main-c__bottom-nav-switch ${bottomNavState ? "flipped" : "" }`} onClick={openCloseBottomNav}>
                {bottomNavState ? <ChevronSkywalker /> : <ChevronSkywalkerInverse />}
            </div>
            <div id={"main-c__bottom-nav-top"} >
              
              <div id={"main-c__bottom-nav-top__switch-c"}>
                <span id={"image-size-span"}>Image Size</span>
                <div id={"main-c__bottom-nav-top__image-size-switch"}>
                  <div className={`${imageSizeState === 1 ? "sml" : "a"} ${imageSizeState === 3 ? "lrg" : "b"}`} id={`image-size-switch__switch`}></div>
                  <span className={`size-switch__switch__span-1 ${imageSizeState === 1 ? "invisible" : "visible"}`} onClick={() => setImageSizeState(1)} >sml</span>  <span className={`size-switch__switch__span-2 ${imageSizeState === 2 ? "invisible" : "visible"}`} onClick={() => setImageSizeState(2)} >med</span> <span className={`size-switch__switch__span-3 ${imageSizeState === 3 ? "invisible" : "visible"}`} onClick={()=>setImageSizeState(3)} >lrg</span>
                </div>
              </div>
              <SearchSwitch query={query} handleSearch={handleSearch} searchMenuState={searchMenuState} setResults={setResults} results={results} />
              {/* <NASAImageSearch setSearch={setSearch} setQuery={setQuery} search={search}/>  */}
            </div>
            {/* <POTDSearch setResults={setResults}/> */}
            <SearchMenu searchMenuState={searchMenuState} setSearchMenuState={setSearchMenuState} />
          </div>
          <Results  error={error} loading={loading} lastSearchElementRef={lastSearchElementRef} allResults={allResults} results={results} imageSizeState={imageSizeState} />
        </div>

      </div>
    )

}

export default MainPage;
