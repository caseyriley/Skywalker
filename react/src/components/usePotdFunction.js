import { useEffect, useState } from 'react'
import axios from 'axios';

export default function usePotdFunction(potdQuery) {
  const [loading, setLoading] = useState(true)
  const [potdError, setPotdError] = useState(false)
  const [potdResult, setPotdResult] = useState([]);

  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
  let date = `2020-08-08`
  useEffect(() => {
    setPotdResult([])
  }, [potdQuery])

  useEffect(() => {
    setLoading(true)
    setPotdError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://api.nasa.gov/planetary/apod?date=${potdQuery}`,
      params: {
        hd: true,
        api_key: "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setPotdResult(res.data)
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setPotdError(true)
      })
    return () => cancel()
  }, [potdQuery])

  return { loading, potdError, potdResult }
}