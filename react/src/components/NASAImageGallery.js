import React from 'react';

const NASAImageGallery = (props) => {
  return (
    <ul className={"main-c__image-ul"}>
      <li className={"main-c__image-li"}>
        {props.results ? props.results.map(src => (
          <img className={`search-array-image ${props.imageSizeState === 1 ? "sml-image" : "a"} ${props.imageSizeState === 3 ? "lrg-image" : "b"}`} src={`${src}`} alt={""} loading="lazy" key={`${src, Math.random() * 1000}`}></img>
        )) : <h3>not available</h3>}
      </li>
    </ul>
  )
}
export default NASAImageGallery;