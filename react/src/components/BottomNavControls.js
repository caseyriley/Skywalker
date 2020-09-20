import React from 'react';
import EpicEnhancedToggle from './EpicEnhancedToggle';
import FilterEndDate from './FilterEndDate';
import FilterStartDate from './FilterStartDate';
import ImageSearchText from './ImageSearchText';
import POTDnextAndPrev from './POTDnextAndPrev';
import POTDSearchText from './POTDsearchText';
import SearchMenu from './SearchMenu';

const BottomNavControls = (props) => {
  return (
    <>
      {(() => {
        switch (props.searchMenuState ? props.searchMenuState : "imageSearch") {
          default: console.log("");
            break;
          case "imageSearch":
            return (
              <>
                <ImageSearchText />
                <FilterEndDate setEndDateFilterState={props.setEndDateFilterState} />
                <FilterStartDate setStartDateFilterState={props.setStartDateFilterState} />
                <SearchMenu searchMenuState={props.searchMenuState} setSearchMenuState={props.setSearchMenuState} />
              </>
            )
          case "picOfTheDay":
            return (
              <>
              <POTDSearchText  />
              <POTDnextAndPrev potdPrevDay={props.potdPrevDay} potdNextDay={props.potdNextDay}/>
              <SearchMenu searchMenuState={props.searchMenuState} setSearchMenuState={props.setSearchMenuState} />
              </>
            )
          case "epic":
            return (
              <>
                <EpicEnhancedToggle epicEnhancedState={props.epicEnhancedState} toggleEnhancedState={props.toggleEnhancedState}/>
                <SearchMenu searchMenuState={props.searchMenuState} setSearchMenuState={props.setSearchMenuState} />
              </>
            )
          case "infiniteScroll":
            return <SearchMenu searchMenuState={props.searchMenuState} setSearchMenuState={props.setSearchMenuState} />
          case "mars-weather":
            return <SearchMenu searchMenuState={props.searchMenuState} setSearchMenuState={props.setSearchMenuState} />
        }
      })()}
    </>
  )
}
export default BottomNavControls;