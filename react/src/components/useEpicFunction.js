import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useEpicFunction(epicQuery) {
  const [loading, setLoading] = useState(true)
  const [epicError, setEpicError] = useState(false)
  const [epicResult, setEpicResult] = useState([]);

  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
 
  useEffect(() => {
    setEpicResult([])
  }, [epicQuery])

  useEffect(() => {
    console.log("about to get")
    console.log(epicQuery)
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
    

    
    
    fetch(`https://api.nasa.gov/EPIC/api/natural/date/${epicQuery}?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz`

    // fetch(`https://api.nasa.gov/EPIC/api/natural/all?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz`
    // fetch(`https://epic.gsfc.nasa.gov/api/images.php?enhanced/date/2020-06-08?api_key="DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"`
    // , { mode: 'no-cors'}
    )
    // .then(res => res.json)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setEpicResult(data))
      .catch(e => {
        console.log("error")
        // if (axios.isCancel(e)) return
        // setEpicError(true)
      })
    // return () => cancel()
  }, [epicQuery])

  return { loading, epicError, epicResult }
}

