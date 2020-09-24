import React, {useState, useEffect} from 'react';
import LeftArrow from '../images/LeftArrow';
import MagnifyingGlass from '../images/MagnifyingGlass';

const NASAImageSearch = (props) => {
 
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  


  let API_KEY = "HBW5c8xowLyU4NYh8rLUQY47Rth5rmaK5o7fQyWK"
  // let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://images-api.nasa.gov/search?q=${query}&page=2`
        );
        const json = await response.json();
        // console.log({json});
        // console.log("000",json.collection.items)
        props.setResults(
          //data.collection.items[0].links[0].href
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

  // useEffect(() => {
  //   async function fetchData(pageNo = 2) {
  //     try {
  //       const apiResults = await fetch(
  //         `https://images-api.nasa.gov/search?q=${query}&page=${pageNo}`
  //       )
  //       .then(resp => {
  //         // console.log(resp.json());
  //         return resp.json();
  //       });
       
        
          
  //         // json.collection.items.map(item => {
  //         //   return item.links.map(link => {
  //         //     return link.href;
  //         //   })
  //         // })
        
  //     } catch (error) { }
  //   }

  //   const getEntireUserList = async function (pageNo = 2) {
  //     const results = await fetchData(pageNo);
  //     console.log("Retreiving data from API for page : " + pageNo);
  //     console.log("RESULTS===>", results)
  //     // if (results.length > 0) {
  //     //   return results.concat(await getEntireUserList(pageNo + 1));
  //     // } else {
  //     //   return results;
  //     // }
  //   };


  //   (async () => {

  //     const entireList = await getEntireUserList();
  //     console.log('entireList',entireList);
  //     props.setResults(fetchData)

  //   })();

  //   if (query !== "") {

  //   }

  // }, [query])

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
        <button className={"main-c__bottom-nav-top__Searchbar__button"} type={"submit"}>
          <LeftArrow />
        </button>
      </form>
    </div>
  )
}
export default NASAImageSearch;