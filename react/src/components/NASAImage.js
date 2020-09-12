import React, { useState, useEffect } from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';


const NASAImage = (props) => {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  const [queState, setQueState] = useState([])
  
  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
  // let href = `https://images-api.nasa.gov/search?q=${query}`


  

  // useEffect(() => {
  //   async function fetchData(href){
  //     try {
  //       const response = await fetch(
  //         href
  //       );
  //       const json = await response.json();
  //       return json
  //     } catch (error) {}
  //   }

  //   // let que = [];

    

  //   if (query !== "") {
  //     fetchData();
  //   }

 

    
  //   let href = `https://images-api.nasa.gov/search?q=${query}`
  //   fetchData(href)
  //     .then(json=>setQueState(json))
      
    
  

  //   if (query !== "") {
  //     fetchData();
  //   }
  // }, [query])

  useEffect(() => {
    const limitPerPage = 20;
    const apiUrl = `https://images-api.nasa.gov/search?q=${query}`;

    const getUsers = async function (pageNo = 2) {

      let actualUrl = apiUrl + `?page=${pageNo}`;
      var apiResults = await fetch(actualUrl)
        .then(resp => {
          return resp.json();
        });

      return apiResults;

    }

    const getEntireUserList = async function (pageNo = 2) {
      const results = await getUsers(pageNo);
      console.log("Retreiving data from API for page : " + pageNo);
      if (results.length > 0) {
        return results.concat(await getEntireUserList(pageNo + 1));
      } else {
        return results;
      }
    };


    (async () => {

      const entireList = await getEntireUserList();
      console.log(entireList);
      props.setResults(entireList)

    })();
  },[query])

  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass />
      <form className={"main-c__bottom-nav-top__Searchbar__form"}
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}>
        <input name={"main-c__bottom-nav-top__Searchbar__input"} value={search} placeholder={"new search"}
          onChange={e => setSearch(e.target.value)}
        ></input>
        <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"}>
          <LeftArrow />
        </button>
      </form>
    </div>
  )
}

export default NASAImage;