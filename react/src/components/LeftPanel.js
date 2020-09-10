import React, {useState} from 'react';

import BirdLeftPanel from '../images/BirdLeftPanel';
import BirdHouse from '../images/BirdHouse';
import Hash from '../images/Hash';
import Bell from '../images/Bell';
import Envelope from '../images/Envelope';
import Bookmark from '../images/Bookmark';
import Paper from '../images/Paper';
import Person from '../images/Person';
import CirclesMore from '../images/CirclesMore';
import DownCarrot from '../images/DownCarrot';
import Feather from '../images/Feather';
import CheckMark from '../images/CheckMark';
import DownCarrotLeftPanel from '../images/DownCarrotLeftPanel'

const LeftPanel = (props) => {
  const [logoutModalState, setLogoutModalState] = useState(false);
  const toggleLogoutModal = ()=>{
    let changeModal = !logoutModalState;
    setLogoutModalState(changeModal)
  }

  return (
    <div id={"main-c__left"} >
      <div id={"left-logout-modal"} className={`${logoutModalState ? "left-logout-modal-visible": "left-logout-modal-invisible"}`}>
        <div id={"left-logout-modal__top"}>
          <img className={"profile-bubble"} alt={""} src={props.user.profile_pic} ></img>
          <div className={"left-logout-modal__user-names"} >
            <div className={"left-logout-modal__user-names__first-last"}>
            <span className={"left-logout-modal__user-names__span1"}>{`${props.user.firstname}  ${props.user.lastname}`}</span>
            </div>
            <span className={"left-logout-modal__user-names__span2"} >@{props.user.username}</span>
          </div>
          <CheckMark></CheckMark>
        </div  >
        <div id={"left-logout-modal__bottom"}>
          <div className="left-logout-modal__bottom--button">
            <span
              onClick={ () => {localStorage.removeItem("auth_token"); window.location.href = 'http://localhost:3000'}} className={"left-logout-modal__logout-span"}>
            Log out</span>
          </div>
        </div>
      </div>
      <div>
        <div className={"main-c__left__bird"} onClick={props.centerPanelHome}>
          <BirdLeftPanel/>
        </div>
      </div>
      <div onClick={props.centerPanelHome}>
        <div className={"main-c__left__link"}>
          <BirdHouse centerPanelHome={props.centerPanelHome} ></BirdHouse>
          <span>HOME</span>
        </div>
      </div>
      <div className={"main-c__left-c"} >
        <div id={"hash-c"} className={"main-c__left-c__link-black"}>
          <Hash></Hash>
          <span>Explore</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"bell-c"} className={"main-c__left-c__link-black"}>
          <Bell></Bell>
          <span>Notifications</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"envelope-c"} className={"main-c__left-c__link-black"}>
          <Envelope></Envelope>
          <span>Messages</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"bookmark-c"} className={"main-c__left-c__link-black"}>
          <Bookmark></Bookmark>
          <span>Bookmarks</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"paper-c"} className={"main-c__left-c__link-black"}>
          <Paper></Paper>
          <span>Lists</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"person-c"} className={"main-c__left-c__link-black"}>
          <Person></Person>
          <span>Profile</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"circles-more-c"} className={"main-c__left-c__link-black"}>
          <CirclesMore></CirclesMore>
          <span>More</span>
        </div>
      </div>
      <div id={"main-c__left__bottom-c"} >
        <div id={"tweet-button"}>
          <span>Tweet</span>
          <Feather></Feather>
        </div>
        <div id={"main-c__left__login"} onClick={toggleLogoutModal}>
            <img className={"profile-bubble"} alt={""} src={props.user.profile_pic} ></img>
          <div className={"user-names"} >
            <div className={"logout-modal__user-names__first-last"}>
              <span className={"logout-modal__user-names__span1"}>{`${props.user.firstname}  ${props.user.lastname}`}</span>
            </div>
            <span className={"user-names__span2"} >@{props.user.username}</span>
          </div>
          <DownCarrotLeftPanel/>
        </div>
      </div>
    </div>
  )
}
export default LeftPanel;
