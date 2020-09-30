import React, {useState, useRef, useCallback, useEffect} from 'react';
import useMp3 from './useMp3';
import ChevronSkywalker from '../images/ChevronSkywalker';
import ChevronSkywalkerInverse from '../images/ChevronSkywalkerInverse';
// import ImageSizeSelect from './ImageSizeSelect';
// import SearchMenu from './SearchMenu';
import SearchSwitch from './SearchSwitch';
import useSearchFunction from './useSearchFunction';
import usePotdFunction from './usePotdFunction';
import useEpicFunction from './useEpicFunction';
import ImageSwitch from './ImageSwitch';
// import FilterStartDate from './FilterStartDate';
// import FilterEndDate from './FilterEndDate';
import BottomNavControls from './BottomNavControls';
import LogoutButton from './LogoutButton';
import lottie from 'lottie-web';
import useAudioSearchFunction from './useAudioSearchFunction';

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
  //------------Image-Data-Gallery-Modal-Open-Close---------------
  const [openCloseState, setOpenCloseState] = useState(false);
  //--------------------------------------------------------------
  //------------Image-Data-Gallery-Modal-Image-Size---------------
  const [modalImageSizeState, setModalImageSizeState] = useState(3);
  // ----------------------------------------------------------------
// -------------Set-Image-Data-Gallery--image-size-------------------------------
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
//----------------POTD-Search---------------------------
  const [potdQuery, setPotdQuery] = useState('2020-08-01');
  const [potdImageSizeState, setPotdImageSizeState] = useState(3)

  const {
    potdResult,
    potdError
  } = usePotdFunction(potdQuery)

  function potdNextDay(){
    let year = potdQuery.slice(0, 4);
    let month = potdQuery.slice(5, 7);
    let day = potdQuery.slice(8, 10)
    
    if (day < 28){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 1 && day < 31){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 2){
      setPotdQuery(`${year}-${parseInt(month) + 1}-01`)
    } else if (month === 3 && day < 31){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 4 && day < 30){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 5 && day < 31){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 6 && day < 30){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 7 && day < 31){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 8 && day < 31){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 9 && day < 30){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 10 && day < 31){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 11 && day < 30){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 12 && day < 31){
      setPotdQuery(`${year}-${month}-${parseInt(day) + 1}`)
    } else if (month === 1 && day > 30) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 2 && day === 28) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 3 && day === 31) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 4 && day === 30) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 5 && day === 31) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 6 && day === 30) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 7 && day === 31) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 8 && day === 31) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 9 && day === 30) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 10 && day === 31) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 11 && day === 30) {
      setPotdQuery(`${year}-0${parseInt(month) + 1}-01`)
    } else if (month === 12 && day === 31) {
      setPotdQuery(`${parseInt(year) + 1}-01-01`)
    }
  }
  function potdPrevDay(){
    let year = potdQuery.slice(0, 4);
    let month = potdQuery.slice(5, 7);
    let day = potdQuery.slice(8, 10);

    if (day > 1){
      setPotdQuery(`${year}-${month}-${parseInt(day) - 1}`)
    } else if (month === 1){
      setPotdQuery(`${parseInt(year) - 1}-12-31`)
    } else if (month === 2){
      setPotdQuery(`${year}-01-31`)
    } else if (month === 3) {
      setPotdQuery(`${year}-02-28`)
    } else if (month === 4) {
      setPotdQuery(`${year}-03-31`)
    } else if (month === 5) {
      setPotdQuery(`${year}-04-30`)
    } else if (month === 6) {
      setPotdQuery(`${year}-05-31`)
    } else if (month === 7) {
      setPotdQuery(`${year}-06-30`)
    } else if (month === 8) {
      setPotdQuery(`${year}-07-31`)
    } else if (month === 9) {
      setPotdQuery(`${year}-08-31`)
    } else if (month === 10) {
      setPotdQuery(`${year}-09-30`)
    } else if (month === 11) {
      setPotdQuery(`${year}-010-30`)
    } else if (month === 12) {
      setPotdQuery(`${year}-11-30`)
    } 
  }
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
  //---------------lottie-dog-------------------------------
  const container = useRef(null);
  useEffect(()=>{
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../images/astronaut-dog.json')
    })
  },[])
  //--------------------------------------------------
  // ---------------------Audio---------------------------------
   
  const [audioQuery, setAudioQuery] = useState('')
  const [audioPageNumber, setAuidoPageNumber] = useState(1)
  const [audioStartDateFilterState, setAudioStartDateFilterState] = useState(false);
  const [audioEndDateFilterState, setAudioEndDateFilterState] = useState(false);

  const {
    allAudioResults,
    audioHasMore,
    audioLoading,
    audioError
  } = useAudioSearchFunction(audioQuery, audioPageNumber, audioStartDateFilterState, audioEndDateFilterState)

  const audioObserver = useRef()

  const lastAudioSearchElementRef = useCallback(node => {
    // console.log(node)
    if (audioLoading) return
    if (audioObserver.current) audioObserver.current.disconnect()
    audioObserver.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && audioHasMore) {
        console.log('Visible')
        setAuidoPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) audioObserver.current.observe(node)
  }, [audioLoading, audioHasMore])


  const [audioSearchValue, setAudioSearchValue] = useState();
  function updateAudioSearchValue(e) {
    setAudioSearchValue(e.target.value)
  }

  function handleAudioSearch(e) {
    setAudioQuery(audioSearchValue)
    setAuidoPageNumber(1)
  }

  const [mp3Query, setMp3query] = useState();
  const {
    mp3Result,
    mp3Error
  } = useMp3(mp3Query)

  const [mp3Info, setMp3Info] = useState();


  // ---------------------------------------------------------
  // ------------------User-Gallery---------------------------
  
  // ---------------------------------------------------------

    return (
      
      <div id={"main-c"}>
        <div className={`main-c__bottom-nav ${bottomNavState ? "open" : "closed"}`}   >
          <div className={`main-c__bottom-nav-switch ${bottomNavState ? "flipped" : ""}`} onClick={openCloseBottomNav}>
            {bottomNavState ? <ChevronSkywalker /> : <ChevronSkywalkerInverse />}
          </div>

          <div id={"main-c__bottom-nav-top"} >
            <SearchSwitch
              mp3Result={mp3Result} closeBottomNav={closeBottomNav} updateAudioSearchValue={updateAudioSearchValue} audioSearchValue={audioSearchValue} audioQuery={audioQuery} handleAudioSearch={handleAudioSearch} allAudioResults={allAudioResults}
              modalImageSizeState={modalImageSizeState} setModalImageSizeState={setModalImageSizeState} openCloseState={openCloseState} imageSizeState={imageSizeState} setImageSizeState={setImageSizeState} potdImageSizeState={potdImageSizeState} setPotdImageSizeState={setPotdImageSizeState} epicQuery={epicQuery} setEpicQuery={setEpicQuery} setPotdQuery={setPotdQuery} potdQuery={potdQuery} closeBottomNav={closeBottomNav} searchValue={searchValue} updateSearchValue={updateSearchValue} query={query} handleSearch={handleSearch} searchMenuState={searchMenuState} setResults={setResults} results={results} />
          </div>
          <div id={"nav-scroll"}>
            <div id={"nav-scroll__inner"}>
              <BottomNavControls mp3Info={mp3Info} potdPrevDay={potdPrevDay} potdNextDay={potdNextDay} setEpicQuery={setEpicQuery} epicEnhancedState={epicEnhancedState} toggleEnhancedState={toggleEnhancedState} searchMenuState={searchMenuState} setSearchMenuState={setSearchMenuState} setStartDateFilterState={setStartDateFilterState} setEndDateFilterState={setEndDateFilterState} />
              <LogoutButton bottomNavState={bottomNavState} />
              <div className="dog" ref={container}></div>
            </div>
          </div>
        </div>
          <div id={"main-c__scroll"}>
          </div>
        <ImageSwitch
          setMp3Info={setMp3Info} mp3Query={mp3Query} setMp3query={setMp3query} mp3Result={mp3Result} audioError={audioError} openCloseState={openCloseState} setOpenCloseState={setOpenCloseState} audioLoading={audioLoading} lastAudioSearchElementRef={lastAudioSearchElementRef} allAudioResults={allAudioResults}  
          error={error} potdError={potdError} potdNextDay={potdNextDay} potdPrevDay={potdPrevDay} modalImageSizeState={modalImageSizeState} openCloseState={openCloseState} setOpenCloseState={setOpenCloseState} epicEnhancedState={epicEnhancedState} epicQuery={epicQuery} epicResult={epicResult} searchMenuState={searchMenuState} setPotdImageSizeState={setPotdImageSizeState} potdImageSizeState={potdImageSizeState} potdResult={potdResult} error={error} loading={loading} lastSearchElementRef={lastSearchElementRef} allResults={allResults} results={results} imageSizeState={imageSizeState} />
      </div>
      
    )

}

export default MainPage;
