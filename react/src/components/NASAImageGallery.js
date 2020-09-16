import React from 'react';

const NASAImageGallery = (props) => {
  return (
    <ul className={"main-c__image-ul"}>
      <li className={"main-c__image-li"}>
        {props.allResults ? props.allResults.map((src, index ) => {
          if (props.allResults.length === index +1) {
            return <img ref={props.lastSearchElementRef} className={`search-array-image ${props.imageSizeState === 1 ? "sml-image" : "a"} ${props.imageSizeState === 3 ? "lrg-image" : "b"}`} src={src} alt={""} loading="lazy" key={`${index}`}></img>
          } else {
            return <img className={`search-array-image ${props.imageSizeState === 1 ? "sml-image" : "a"} ${props.imageSizeState === 2 ? "med-image" : ""} ${props.imageSizeState === 3 ? "lrg-image" : ""} ${props.imageSizeState === 4 ? "full-image" : "b"}`} src={src} alt="" loading="lazy" key={`${index}`}></img>
          }
        }) : <h1 key={`${Math.floor(Math.random() * Math.floor(1000))}`}>Bad Data</h1>}
      </li>
      <div className={"loading"}>{props.loading && 'loading.....'}</div>
      <div>{props.error && 'Error'}</div>
    </ul>
  )
}
export default NASAImageGallery;