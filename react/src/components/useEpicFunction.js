import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useEpicFunction(epicQuery) {
  const [loading, setLoading] = useState(true)
  const [epicError, setEpicError] = useState(false)
  const [epicResult, setEpicResult] = useState([]);

  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
  let date = `2020-08-08`
  useEffect(() => {
    setEpicResult([])
  }, [epicQuery])

  useEffect(() => {
    console.log("about to get")
    setLoading(true)
    setEpicError(false)
    let cancel

    
    // axios({
    //   method: 'GET',
    //   mode: "no-cors",
    //   url: `https://epic.gsfc.nasa.gov/api/images.php`,
    //   params: { api_key: "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"},
    //   cancelToken: new axios.CancelToken(c => cancel = c)
    // })
    // .then(res=> console.log(res))

    // fetch(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz`
    


    fetch(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz`
    // fetch(`https://api.nasa.gov/EPIC/api/natural/all?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz`
    // fetch(`https://epic.gsfc.nasa.gov/api/images.php?enhanced/date/2020-06-08?api_key="DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"`
    // , { mode: 'no-cors'}
    )
    // .then(res => res.json)
      .then(res => res.json())
      .then(data => setEpicResult(data))
    // return () => cancel()
  }, [epicQuery])

  return { loading, epicError, epicResult }
}

// axios.get(`https://epic.gsfc.nasa.gov/api/images.php`, params: { api_key: "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz" })