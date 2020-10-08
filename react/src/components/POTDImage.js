import React from 'react';
import doubleChevron from '../images/doubleChevron.png'
import facebookPlain from '../images/facebookPlain.png';
import twitterPlain from '../images/twitterPlain.png';
import Celestial from './Celestial';
import Loading from './Loading';

const POTDImage = (props) => {
  return (
    <>
      <img id={"chevron-right"} src={doubleChevron} alt={""} onClick={props.potdNextDay}></img>
      <img id={"chevron-left"} src={doubleChevron} alt={""} onClick={props.potdPrevDay} ></img>
      {props.potdError !== true ?

        <>
          <Celestial />
          <div id={"potd-c"}>
            <img className={`potd-img ${props.potdImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.potdImageSizeState === 4 ? "potd-full-image" : ""}`} src={props.potdResult.hdurl} alt={""}></img>
          <div>
          <div className={"potd-description"}>
              {props.potdResult.title ? <h2 className={"potd-description__fade"}>{props.potdResult.title}</h2> : <h2></h2>}
              {props.potdResult.explanation ? <p className={"potd-description__fade"}>{props.potdResult.explanation}</p> : <p></p>}
          </div>
          <div className={"social-media-links"} >
            {/* ---------------FB--------------- */}
            {props.potdResult.hdurl ? 
              <div class="fb-share-button potd-description__fade" data-layout="button" data-size="large" lazy="true">
                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${props.potdResult.hdurl}`} class="fb-xfbml-parse-ignore"><img className={"facebook-image"} src={facebookPlain} alt={""} /></a>
              </div>
              : <div></div>
            }
            {/* -------------------------------- */}
            {/* -----------------Twitter------------- */}
            {props.potdResult.hdurl ? 
              <a className="twitter-share-button potd-description__fade"
                href={`https://twitter.com/intent/tweet?text=${props.potdResult.hdurl}`}
                data-size="large">
                <img className="twitter-share-image" src={twitterPlain} alt=""/>
              </a> 
              : <div></div>
            }
            {/* ------------------------------------- */}
          </div>
        </div>
      </div>
    </>
    :
      <>
        <Loading/>
        <div className={"epic-img-c__date-not-available"}>
          <h1>Date Not Available</h1>
          <h1>Please Try Again</h1>
        </div>
      </>
    }
    </>
  )
}
export default POTDImage;