import React, {useState, useEffect} from 'react';
import LeftArrow from '../images/LeftArrow';


const POTDSearch = (props) => {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  // const [results, setResults] = useState();

  // let API_KEY = "HBW5c8xowLyU4NYh8rLUQY47Rth5rmaK5o7fQyWK"
  //https://api.nasa.gov/planetary/apod?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz
  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?date=${search}&api_key=${API_KEY}`
          // `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

        );
        const json = await response.json();
        console.log('json------>', json.url );
        props.setResults(json.url)
      } catch (error) { }
    }

    if (query !== "") {
      fetchData();
    }
  }, [query])

  function onSubmit(e) {
    e.preventDefault();
    setQuery(search);
    console.log("the search --->", search);
  }

  
  return (

    <form id={"main-c__bottom-nav-top__Searchbar__form"}
      onSubmit={e => {
        e.preventDefault();
        setQuery(search);
      }}>
      <input name={"main-c__bottom-nav-top__Searchbar__input"} value={search} placeholder={"YYYY-MM-DD"}
        onChange={e => setSearch(e.target.value)}
      ></input>
      <button id={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"}>
        <LeftArrow />
      </button>
    </form>
  )
}

export default POTDSearch;