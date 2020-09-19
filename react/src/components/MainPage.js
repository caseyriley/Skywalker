import React, {useState, useRef, useCallback} from 'react';
import ChevronSkywalker from '../images/ChevronSkywalker';
import ChevronSkywalkerInverse from '../images/ChevronSkywalkerInverse';
import ImageSizeSelect from './ImageSizeSelect';
import SearchMenu from './SearchMenu';
import SearchSwitch from './SearchSwitch';
import useSearchFunction from './useSearchFunction';
import usePotdFunction from './usePotdFunction';
import useEpicFunction from './useEpicFunction';
import ImageSwitch from './ImageSwitch';
import FilterStartDate from './FilterStartDate';
import FilterEndDate from './FilterEndDate';
import BottomNavControls from './BottomNavControls';
import LogoutButton from './LogoutButton';

// import { API_URL } from '../config.js'

const MainPage = () => {
  

//-------------------Bottom-Nav-Sate
  const [bottomNavState, setBottomNavState] = useState(true);
  const openCloseBottomNav = () => {
    let nextState = !bottomNavState;
    setBottomNavState(nextState)
  }
  const closeBottomNav = () => {
    setBottomNavState(false)
  }
  //---------------------------------------------------------------
// -----------------SET-NASA-image-size-------------------------------
  const [imageSizeState, setImageSizeState] = useState(2);
  // ---------------------------------------------------------------
  //--------------set-menu-position----------------------------------
  const [searchMenuState, setSearchMenuState] = useState("imageSearch")
// -------------------------------------------------------------------
  // ------------original--search--results--go--here------------
  const [results, setResults] = useState();
  // ---------------------------------------------------------------
//------------------NAS-Imgage-Date-Filters
  const [startDateFilterState, setStartDateFilterState] = useState(false);
  const [endDateFilterState, setEndDateFilterState] = useState(false);

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
  // https://epic.gsfc.nasa.gov/archive/enhanced/2015/10/31/png/epic_RGB_20151031003633.png
  // https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png
//----------------POTD-Search---------------------------
  const [potdQuery, setPotdQuery] = useState('');
  const {
    potdResult,
    // hasMore,
    // loading,
    potdError
  } = usePotdFunction(potdQuery)
  //----------------------------------------------------
  //---------------EPIC---------------------------------
  const [epicQuery, setEpicQuery] = useState("2019-05-30");

  const [epicEnhancedState, setEpicEnhancedState] = useState("natural")
  
  const {
    epicResult,
    epicError
  } = useEpicFunction(epicQuery, epicEnhancedState)

  function toggleEnhancedState(){
    if (epicEnhancedState === "natural"){
      setEpicEnhancedState("enhanced")
    } else {
      setEpicEnhancedState("natural")
    }
  }


  //-----------------------------------------------------
    return (
        <div id={"main-c"}>
          <div id={"main-c__scroll"}>
            <div  className={`main-c__bottom-nav ${bottomNavState ? "open" : "closed" }`}   >
              <div className={`main-c__bottom-nav-switch ${bottomNavState ? "flipped" : "" }`} onClick={openCloseBottomNav}>
                  {bottomNavState ? <ChevronSkywalker /> : <ChevronSkywalkerInverse />}
              </div>
              <div id={"main-c__bottom-nav-top"} >
                <ImageSizeSelect imageSizeState={imageSizeState} setImageSizeState={setImageSizeState} />
                <SearchSwitch epicQuery={epicQuery} setEpicQuery={setEpicQuery} setPotdQuery={setPotdQuery}  potdQuery={potdQuery} closeBottomNav={closeBottomNav} searchValue={searchValue} updateSearchValue={updateSearchValue} query={query} handleSearch={handleSearch} searchMenuState={searchMenuState} setResults={setResults} results={results} />
              </div>
              <div >
              </div>
              <BottomNavControls setEpicQuery={setEpicQuery} epicEnhancedState={epicEnhancedState} toggleEnhancedState={toggleEnhancedState}  searchMenuState={searchMenuState} setSearchMenuState={setSearchMenuState} setStartDateFilterState={setStartDateFilterState} setEndDateFilterState={setEndDateFilterState}/>
              <LogoutButton />
            </div>
              <ImageSwitch epicEnhancedState={epicEnhancedState} epicQuery={epicQuery} epicResult={epicResult} searchMenuState={searchMenuState} potdResult={potdResult} error={error} loading={loading} lastSearchElementRef={lastSearchElementRef} allResults={allResults} results={results} imageSizeState={imageSizeState} />
            {/* <Results potdResult={potdResult}  error={error} loading={loading} lastSearchElementRef={lastSearchElementRef} allResults={allResults} results={results} imageSizeState={imageSizeState} /> */}
          </div>
      </div>
    )

}

export default MainPage;
