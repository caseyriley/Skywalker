import { useEffect, useState } from 'react'
import axios from 'axios';

export default function usePotdFunction(potdQuery) {
  const [loading, setLoading] = useState(true)
  const [potdError, setPotdError] = useState(false)
  const [potdResult, setPotdResult] = useState([]);
  // const [hasMore, setHasMore] = useState(false)

  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
  let date = `2020-08-08`
  useEffect(() => {
    setPotdResult([])
  }, [potdQuery])

  useEffect(() => {
    console.log("about to get")
    setLoading(true)
    setPotdError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://api.nasa.gov/planetary/apod?date=${potdQuery}`,
      // https://api.nasa.gov/planetary/apod?&api_key=DEMO_KEY
      params: {
        hd: true,
        api_key: "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setPotdResult(res.data)
        // setPotdResult(res.data.hdurl)
      })
      .then(res => console.log("potdResult---->", potdResult))

      .catch(e => {
        if (axios.isCancel(e)) return
        setPotdError(true)
      })
    return () => cancel()
  }, [potdQuery])

  return { loading, potdError, potdResult }
}