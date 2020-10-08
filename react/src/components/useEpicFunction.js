import { useEffect, useState } from 'react'

export default function useEpicFunction(epicQuery, epicEnhancedState) {
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
    console.log("epicEnhancedState",epicEnhancedState)
    setLoading(true)
    setEpicError(false)
    let cancel

    
    fetch(`https://api.nasa.gov/EPIC/api/${epicEnhancedState}/date/${epicQuery}?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz`

    )
    // .then(res => res.json)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setEpicResult(data))
      .catch(e => {
        console.log("error")
      })
  }, [epicQuery])

  return { loading, epicError, epicResult}
}

