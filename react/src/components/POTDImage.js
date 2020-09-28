import React from 'react';
import doubleChevron from '../images/doubleChevron.png'
import FacebookImage from '../images/FacebookImage.png';
import TwitterCircular from '../images/TwitterCircular.png';
import Loading from './Loading';

const POTDImage = (props) => {
  console.log("POTDprops", props)
  return (
    <>
      {/* --------------------Twitter-Script----------- */}
      {/* <script>window.twttr = (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://twitter.com/intent/tweet?text=www.twitter.com%20pic.twitter.com/n8gZ1tNCcp";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
                t._e.push(f)
        };

        return t;
      }(document, "script", "twitter-wjs"));
      </script> */}
      {/* --------------------------------------------- */}
      <img id={"chevron-right"} src={doubleChevron} alt={""} onClick={props.potdNextDay}></img>
      <img id={"chevron-left"} src={doubleChevron} alt={""} onClick={props.potdPrevDay} ></img>
      {props.potdError !== true ?
    <>
      <div id={"potd-c"}>
        <img className={`potd-img ${props.potdImageSizeState === 3 ? "potd-lrg-image" : ""} ${props.potdImageSizeState === 4 ? "potd-full-image" : ""}`} src={props.potdResult.hdurl} alt={""}></img>
        <div>
          <div className={"potd-description"}>
              <h2>{props.potdResult.title}</h2>
              <p>{props.potdResult.explanation}</p>
          </div>
            <div className={"social-media-links"} >
              {/* ---------------FB--------------- */}
              <div class="fb-share-button"
                // data-href={`${imageModalState.hrf}`} 
                // data-href="https://skywalker3.herokuapp.com/" 
                data-layout="button"
                data-size="large"
                lazy="true"
              >
                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${props.potdResult.hdurl}`} class="fb-xfbml-parse-ignore"><img className={"facebook-image"} src={FacebookImage} alt={""} /></a>
                {/* <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fskywalker3.herokuapp.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a> */}
              </div>
              {/* -------------------------------- */}
              {/* -----------------Twitter------------- */}
              <a className="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${props.potdResult.hdurl}`}
        
                data-size="large">
                <img className="twitter-share-image" src={TwitterCircular} alt=""/>
              </a>
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