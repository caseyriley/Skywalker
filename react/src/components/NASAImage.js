import React, { useState, useEffect } from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';


const NASAImage = (props) => {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const initQue = {list: []}
  const [queState, setQueState] = useState(initQue)
  console.log('queState', queState)
  
  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"


  

  useEffect(() => {
    async function fetchData(href){
      try {
        const response = await fetch(
          href
        );
        const json = await response.json();
        return json
      } catch (error) {}
    }

    // let que = [];

    let href = `https://images-api.nasa.gov/search?q=${query}`

    // function getPage() {
    //   let currentPage = que.pop();
    //   if (currentPage) {
    //     console.log("it does!")
    //   }
    // }


// .collection.links[0].href


    fetchData(href)
      .then((json) => setQueState(queState.list.concat(json)))
      .then(()=> console.log("que", queState))
    // .then(()=>console.log(que))
    // .then(()=> {
    //   getPage()
    // })
  

    // function getPage(){
    //   let currentPage = que.pop();
    //     if (currentPage.collection.links[0].href){
    //       console.log("it does!")
        // let nextHref = currentPage.collection.links[0].href
            // async function fetchNextPage() {
            //   try {
            //     const res =  await fetch(
            //       `${nextHref}`
            //     );
            //     let nextJson = await response.json();
            //     console.log("nextJson", nextJson)
            //   } catch (error) {}
            // }
            // if (query !== ""){
            //   fetchNextPage();
            // }
          // }
        // }
        // getPage()

    // if (query !== "") {
    //   fetchData();
    // }
  }, [query])

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