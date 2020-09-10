import React from 'react';
import MagnifyingGlass from '../images/MagnifyingGlass';
import NewsArray from './NewsArray';
import NewsBlurb from './NewsBlurb';
import NewsBlurb2 from './NewsBlurb2';
import Suggested from './Suggested';




 
const RightPanel = ()=>{

  return (
    <div id={"main-c__right"} >
      <div id={"main-c__right__search-bar"} >
        <MagnifyingGlass></MagnifyingGlass>
        <input id={"search-input"} name={"search-input"} placeholder="Search Chatter" ></input>
      </div>
      <div id={"main-c__right__event-c"} >
        <div id={"main-c__right__event-c__top"} ><span>What's happening</span></div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <NewsBlurb></NewsBlurb>
            <NewsBlurb2/>
          </div>
          <NewsArray></NewsArray>
        </div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <NewsBlurb></NewsBlurb>
            <NewsBlurb2 />
          </div>
          <NewsArray></NewsArray>
        </div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <NewsBlurb></NewsBlurb>
            <NewsBlurb2 />
          </div>
          <NewsArray></NewsArray>
        </div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <NewsBlurb></NewsBlurb>
            <NewsBlurb2 />
          </div>
          <NewsArray></NewsArray>
        </div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <NewsBlurb></NewsBlurb>
            <NewsBlurb2 />
          </div>
          <NewsArray></NewsArray>
        </div>
      </div>


      <div id={"main-c__right__suggestions-c"}>
        <div id={"main-c__right__suggestions-c__top"} ><span>Who to follow</span></div>
        <Suggested/>
        <Suggested />
        <Suggested />
        <div id={"main-c__right__suggestions-c__discaimer"} > <span>Terms Privacy policy Cookies Ads info More</span> </div>
      </div>


    </div>
  )
}
export default RightPanel;