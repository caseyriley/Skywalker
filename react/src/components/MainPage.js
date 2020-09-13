import React, {useState, useEffect, useRef, useCallback} from 'react';
import ChevronSkywalker from '../images/ChevronSkywalker';
import ChevronSkywalkerInverse from '../images/ChevronSkywalkerInverse';
import ImageSizeSelect from './ImageSizeSelect';
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
  const closeBottomNav = () => {
    setBottomNavState(false)
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


  const [searchValue, setSearchValue] = useState();
  function updateSearchValue(e) {
    setSearchValue(e.target.value)
  }

  function handleSearch(e) {
    setQuery(searchValue)
    setPageNumber(1)
    console.log("handle it")
  }
  
    return (
      <div id={"main-c"}>
        <div id={"main-c__scroll"}>
          <div  className={`main-c__bottom-nav ${bottomNavState ? "open" : "closed" }`}   >
            <div className={`main-c__bottom-nav-switch ${bottomNavState ? "flipped" : "" }`} onClick={openCloseBottomNav}>
                {bottomNavState ? <ChevronSkywalker /> : <ChevronSkywalkerInverse />}
            </div>
            <div id={"main-c__bottom-nav-top"} >
              <ImageSizeSelect imageSizeState={imageSizeState} setImageSizeState={setImageSizeState} />
              <SearchSwitch closeBottomNav={closeBottomNav} searchValue={searchValue} updateSearchValue={updateSearchValue} query={query} handleSearch={handleSearch} searchMenuState={searchMenuState} setResults={setResults} results={results} />
            </div>
            <SearchMenu searchMenuState={searchMenuState} setSearchMenuState={setSearchMenuState} />
          </div>
          <Results  error={error} loading={loading} lastSearchElementRef={lastSearchElementRef} allResults={allResults} results={results} imageSizeState={imageSizeState} />
        </div>

      </div>
    )

}

export default MainPage;
