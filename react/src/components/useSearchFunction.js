import {useEffect, useState} from 'react'
import axios from 'axios';

export default function useSearchFunction(query, pageNumber, startDateFilterState, endDateFilterState) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [allResults, setAllResults] = useState([]);
  const [hasMore, setHasMore] = useState(false)

  
  let yearStart = startDateFilterState !== false ? `?year_start=${startDateFilterState}` : '?year_start=1920';
  let yearEnd = endDateFilterState !== false ? `&year_end=${endDateFilterState}` : '&year_end=2050';


  useEffect(() => {
      setAllResults([])
    }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://images-api.nasa.gov/search${yearStart}${yearEnd}`,
      params: { q: query, page: pageNumber, media_type: "image" },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setAllResults(prevResults => {
        return [...new Set([...prevResults, ...res.data.collection.items.map(item => item)])]
      })
        
      
      // .then(res => console.log("imageData====>", res.data.collection.items.map(item => item)))

      setHasMore(res.data.collection.links[0].prompt !== "NEXT")
      setLoading(false)
    })
      .then(() => console.log(allResults))
    
    .catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }
  // ,[]
  , [query, pageNumber]
  )

  return { loading, error, allResults, hasMore }
}

