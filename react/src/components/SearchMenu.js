import React from 'react';

const SearchMenu = (props) => {
  return (
    <nav className={"search-menu-nav"}>
      <div className={`search-menu-nav__a ${props.searchMenuState === "imageSearch" ? "menu-item-1" : ""}`} onClick={() => props.setSearchMenuState("imageSearch")} ><span>Image Search</span></div>
      <div className={`search-menu-nav__a ${props.searchMenuState === "picOfTheDay" ? "menu-item-2" : ""}`} onClick={()=>props.setSearchMenuState("picOfTheDay")} ><span>pic of the day</span></div>
      <div className={`search-menu-nav__a ${props.searchMenuState === "epic" ? "menu-item-3" : ""}`} onClick={() => props.setSearchMenuState("epic")} ><span>pics of earth</span></div>
      <div className={`search-menu-nav__a ${props.searchMenuState === "infiniteScroll" ? "menu-item-4" : ""}`} onClick={() => props.setSearchMenuState("infiniteScroll")} ><span>Audio Search</span></div>
      <div className={`search-menu-nav__a ${props.searchMenuState === "mars-weather" ? "menu-item-5" : ""}`} onClick={() => props.setSearchMenuState("mars-weather")} ><span>User Gallery</span></div>
      <div className="animation start-home"></div>
    </nav>
  )
}
export default SearchMenu;
//"ininiteScroll"