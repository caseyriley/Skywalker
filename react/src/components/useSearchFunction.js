import {useEffect, useState} from 'react'
import axios from 'axios';

export default function useSearchFunction(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [allResults, setAllResults] = useState([]);
  const [hasMore, setHasMore] = useState(false)

  let year = `2020`
  let yearStart = `, year_start: ${year}`
  useEffect(() => {
      setAllResults([])
    }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://images-api.nasa.gov/search',
      params: { q: query, page: pageNumber, media_type: "image" },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setAllResults(prevResults => {
        return [...new Set([...prevResults, ...res.data.collection.items.map(item => item.links.map(link => link.href))])]
      })
      setHasMore(res.data.collection.links[0].prompt !== "NEXT")
      setLoading(false)
    }).catch(e => {
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

