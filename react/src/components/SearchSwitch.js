import React from 'react';
import NASAImageSearch from './NASAImageSearch';
import POTDSearch from './POTDSearch';

const SearchSwitch = (props) => {
  
  return (
    <>
      {(() => {
        switch (props.searchMenuState) {
          case "imageSearch":
            return <NASAImageSearch setSearch={props.setSearch} setQuery={props.setQuery} search={props.search} /> 
          case "picOfTheDay":
            return <POTDSearch setResults={props.setResults} />
        }
      })()}
    </>
  )
}
export default SearchSwitch;