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
    setLoading(true)
    setEpicError(false)
    let cancel

    
    fetch(`https://api.nasa.gov/EPIC/api/${epicEnhancedState}/date/${epicQuery}?api_key=DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz`

    )
      .then(res => res.json())
      .then(data => setEpicResult(data))
      .catch(e => {
        console.log("error")
      })
  }, [epicQuery])

  return { loading, epicError, epicResult}
}

