import React from 'react';
import EpicEnhancedToggle from './EpicEnhancedToggle';
import FilterEndDate from './FilterEndDate';
import FilterStartDate from './FilterStartDate';
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
                <FilterEndDate setEndDateFilterState={props.setEndDateFilterState} />
                <FilterStartDate setStartDateFilterState={props.setStartDateFilterState} />
                <SearchMenu searchMenuState={props.searchMenuState} setSearchMenuState={props.setSearchMenuState} />
              </>
            )
          case "picOfTheDay":
            return <SearchMenu searchMenuState={props.searchMenuState} setSearchMenuState={props.setSearchMenuState} />
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