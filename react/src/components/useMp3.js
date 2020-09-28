import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useMp3(mp3Query) {
  const [mp3Result, setMp3Result] = useState([]);
  const [mp3Error, setMp3Error] = useState(false)

  let API_KEY = "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
  let date = `2020-08-08`
  useEffect(() => {
    setMp3Result([])
  }, [mp3Query])

  useEffect(() => {
    console.log("about to get")
    setMp3Error(false)
    let cancel
    axios({
      method: 'GET',
      url: mp3Query,
      // https://api.nasa.gov/planetary/apod?&api_key=DEMO_KEY
      params: {
        hd: true,
        api_key: "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setMp3Result(res.data)
      })
      .then(res => console.log("mp3Result---->", mp3Result))

      .catch(e => {
        if (axios.isCancel(e)) return
        setMp3Error(true)
      })
    return () => cancel()
  }, [mp3Query])

  return { mp3Error, mp3Result }
}