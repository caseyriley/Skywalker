import React, { useState, useEffect } from 'react';
import RightArrow from '../images/RightArrow.png';
import MagnifyingGlass from '../images/MagnifyingGlass';


const NASAImage = (props) => {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [pageOne, setPageOne] = useState([]);
  const [pageTwo, setPageTwo] = useState([]);
  const [pageThree, setPageThree] = useState([]);
  
  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"

  //--------------------fetch-page-one----------------------------
  useEffect(() => {
    async function fetchPageOne() {
      console.log('insideQueryTop', query)
      try {
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${query}&page=${1}`
        );
        const json = await response.json();
        setPageOne(
          json.collection.items.map(item => {
            return item.links.map(link => {
              return link.href;
            })
          })
        )
      } catch (error) { }
    }
//----------------------fetch-page-two-------------------------------------
    async function fetchPageTwo() {
      try {
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${query}&page=${3}`
        );
        const json = await response.json();
        setPageTwo( 
          json.collection.items.map(item => {
            return item.links.map(link => {
              return link.href;
            })
          })
        )
      } catch (error) { }
    }
//----------------------fetch-page-three-------------------------------------
    async function fetchPageThree() {
      try {
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${query}&page=${3}`
        );
        const json = await response.json();
        setPageThree( 
          json.collection.items.map(item => {
            return item.links.map(link => {
              return link.href;
            })
          })
        )
      } catch (error) { }
    }



    if (query !== "") {
      fetchPageOne()
      fetchPageTwo() 
      fetchPageThree() 
     
      
    }
    console.log('insideQueryBottom', query)
    
  }, [query])

  useEffect(()=>{
    console.log('pageOne', pageOne)
    console.log('pageTwo', pageTwo)
    console.log('pageThree', pageThree)
    props.setResults([...pageOne, ...pageTwo, ...pageThree])
    console.log('results===>', props.results)
  }, [pageOne, pageTwo, pageThree])

  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
      <form className={"main-c__bottom-nav-top__Searchbar__form"}
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}>
        <input name={"main-c__bottom-nav-top__Searchbar__input"} value={search} placeholder={"3 page search"}
          onChange={e => setSearch(e.target.value)}
        ></input>
        <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"}>
          {/* <LeftArrow /> */}
          <img className={"right-arrow"} src={RightArrow} alt={""} />
        </button>
      </form>
    </div>
  )
}

export default NASAImage;