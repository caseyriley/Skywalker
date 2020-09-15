import React, {useState, useRef, useCallback} from 'react';
import ChevronSkywalker from '../images/ChevronSkywalker';
import ChevronSkywalkerInverse from '../images/ChevronSkywalkerInverse';
import ImageSizeSelect from './ImageSizeSelect';
import SearchMenu from './SearchMenu';
import SearchSwitch from './SearchSwitch';
import useSearchFunction from './useSearchFunction';
import usePotdFunction from './usePotdFunction';
import ImageSwitch from './ImageSwitch';
import FilterStartDate from './FilterStartDate';
import FilterEndDate from './FilterEndDate';

// import { API_URL } from '../config.js'

const MainPage = () => {
  
  const [startDateFilterState, setStartDateFilterState] = useState(false);
  const [endDateFilterState, setEndDateFilterState] = useState(false);

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

// ------------------NASA-Image-Search-----------------------------------
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    allResults,
    hasMore,
    loading,
    error
  } = useSearchFunction(query, pageNumber, startDateFilterState, endDateFilterState)

  const observer = useRef()

  const lastSearchElementRef = useCallback(node => {
    // console.log(node)
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
  }
// ------------------------------------------------------


//----------------POTD-Search---------------------------
  const [potdQuery, setPotdQuery] = useState('');
  // const [potdSearchValue, setPotdSearchValue] = useState();
  const {
    potdResult,
    // hasMore,
    // loading,
    potdError
  } = usePotdFunction(potdQuery)

  // function updatePotdSearchValue(e){
  //   setPotdSearchValue(e.target.value)
  // }
  // function handlePotdSearch(e) {
  //   setPotdQuery(potdSearchValue)
  // }
  //----------------------------------------------------
    return (
        <div id={"main-c"}>
          <div id={"main-c__scroll"}>
            <div  className={`main-c__bottom-nav ${bottomNavState ? "open" : "closed" }`}   >
              <div className={`main-c__bottom-nav-switch ${bottomNavState ? "flipped" : "" }`} onClick={openCloseBottomNav}>
                  {bottomNavState ? <ChevronSkywalker /> : <ChevronSkywalkerInverse />}
              </div>
              <div id={"main-c__bottom-nav-top"} >
                <ImageSizeSelect imageSizeState={imageSizeState} setImageSizeState={setImageSizeState} />
                <SearchSwitch setPotdQuery={setPotdQuery}  potdQuery={potdQuery} closeBottomNav={closeBottomNav} searchValue={searchValue} updateSearchValue={updateSearchValue} query={query} handleSearch={handleSearch} searchMenuState={searchMenuState} setResults={setResults} results={results} />
              </div>
              <div >
              </div>
              {/* <SearchFilter /> */}
              <FilterEndDate setEndDateFilterState={setEndDateFilterState} />
              <FilterStartDate setStartDateFilterState={setStartDateFilterState}/>
              <SearchMenu searchMenuState={searchMenuState} setSearchMenuState={setSearchMenuState} />
            </div>
            <ImageSwitch searchMenuState={searchMenuState} potdResult={potdResult} error={error} loading={loading} lastSearchElementRef={lastSearchElementRef} allResults={allResults} results={results} imageSizeState={imageSizeState} />
            {/* <Results potdResult={potdResult}  error={error} loading={loading} lastSearchElementRef={lastSearchElementRef} allResults={allResults} results={results} imageSizeState={imageSizeState} /> */}
          </div>
      </div>
    )

}

export default MainPage;
