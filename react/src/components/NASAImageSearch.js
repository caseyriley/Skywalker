import React, {useState, useEffect} from 'react';
import RightArrow from '../images/RightArrow.png';
import MagnifyingGlass from '../images/MagnifyingGlass';


const NASAImageSearch = (props) => {
 
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  
  let API_KEY = "HBW5c8xowLyU4NYh8rLUQY47Rth5rmaK5o7fQyWK"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${query}&page=2`
        );
        const json = await response.json();
        props.setResults(
          json.collection.items.map(item => {
            return item.links.map(link => {
              return link.href;
            })
          })
        )
      } catch (error) { }
    }

    if (query !== "") {
      fetchData();
    }
    
  }, [query])


  return (
    <div id={"main-c__bottom-nav-top__Searchbar"} >
      <MagnifyingGlass/>
      <form id={"main-c__bottom-nav-top__Searchbar__form"}
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}>
        <input name={"main-c__bottom-nav-top__Searchbar__input"} value={search} placeholder={"search"}
          onChange={e => setSearch(e.target.value)}
        ></input>
        <div className={"arrow-c"}>
          <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"}>
            <img className={"right-arrow"} src={RightArrow} alt={""}/>
          </button>
        </div>
      </form>
    </div>
  )
}
export default NASAImageSearch;