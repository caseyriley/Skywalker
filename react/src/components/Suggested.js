import React from 'react';
import p1 from '../images/ProfileImages/p1.jpg';
import p2 from '../images/ProfileImages/p2.jpg';
import p3 from '../images/ProfileImages/p3.jpg';
import p4 from '../images/ProfileImages/p4.jpg';
import p5 from '../images/ProfileImages/p5.jpg';
import p6 from '../images/ProfileImages/p6.jpg';
import p7 from '../images/ProfileImages/p7.jpg';
import p8 from '../images/ProfileImages/p8.jpg';
import p9 from '../images/ProfileImages/p9.jpg';
import p10 from '../images/ProfileImages/p10.jpg';
import p11 from '../images/ProfileImages/p11.jpg';
import p12 from '../images/ProfileImages/p12.jpg';
import p13 from '../images/ProfileImages/p13.jpg';
import p14 from '../images/ProfileImages/p14.jpg';
import p15 from '../images/ProfileImages/p15.jpg';
import p16 from '../images/ProfileImages/p16.jpg';
import p17 from '../images/ProfileImages/p17.jpg';
import p18 from '../images/ProfileImages/p18.jpg';
import p19 from '../images/ProfileImages/p19.jpg';


const Suggested =()=>{

  const atNameArray = ["chosentwo","goldentree","opulentpearl","knownothing","beyondtime","heartspace","colorfullhere","somethingiam","withoutu","dreamsofu","desertflower","unitynow","whispersofthis","columnoffire","dropsofbass","coolanyway","sweetsassy","wiggleit","letmecuagain","forgetit","laughsalot","thelast","fatalkiss"]
  function getRandomAtName(max){
    return atNameArray[Math.floor(Math.random() * Math.floor(max))];
  }
  let randomAtName = getRandomAtName(atNameArray.length -1)

  const nameArray = ["Shera", "Barbi", "Breyona", "Maximus", "Fabio","Unicorn","Ash","George","Nora","Hanna","Azm","Nerender","Vlad","Simon","Wally","Not Karen","Marcio","Madeline","Astrid","Galant","Jerome","Arty","Fizban","Lucy","Rose","Vera","Lily","Fern"]
  function getRandomName(max) {
    return nameArray[(Math.floor(Math.random() * Math.floor(max)))];
  }
  let randomName = getRandomName(nameArray.length -1);

  const suggestedArray = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19 ]
  function getRandomInt(max) {
    return suggestedArray[(Math.floor(Math.random() * Math.floor(max)))];
  }
  let randomPic = getRandomInt(suggestedArray.length -1);

  return(
    <>
      <div className={"main-c__right__suggestions-c__feed"}>
        <div id={"main-c__right__user-pic-bublle-c"}>
          <img className={"profile-bubble-3"} alt={""} src={`${randomPic}`}></img>
        </div>
        <div className={"suggestions-feed"}>
          <p className={"suggestions-feed__name"} >{`${randomName}`}</p>
          <p className={"suggestions-feed__atname"} >@{`${randomAtName}`}</p>
        </div> 
        <div className={"follow-button-suggestions"} > <span>Follow</span> </div>
      </div>
    </>
  )
}
export default Suggested;