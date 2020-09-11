import React from 'react';

const SearchMenu = (props) => {
  return (
    <nav className={"search-menu-nav"}>
      <div className={"search-menu-nav__a"} onClick={() => props.setSearchMenuState("imageSearch")} ><span>Image Search</span></div>
      <div className={"search-menu-nav__a"} onClick={()=>props.setSearchMenuState("picOfTheDay")} ><span>pic of the day</span></div>
      <div className={"search-menu-nav__a"} ><span>Blog</span></div>
      <div className={"search-menu-nav__a"} ><span>Portefolio</span></div>
      <div className={"search-menu-nav__a"} ><span>Contact</span></div>
      <div className="animation start-home"></div>
    </nav>
  )
}
export default SearchMenu;