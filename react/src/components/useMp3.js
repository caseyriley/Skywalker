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
    setMp3Error(false)
    let cancel
    axios({
      method: 'GET',
      url: mp3Query,
      params: {
        hd: true,
        api_key: "DZlJvpOuxIYWGgRha1mCvDtqDwngAsgkv09kyCKz"
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setMp3Result(res.data)
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setMp3Error(true)
      })
    return () => cancel()
  }, [mp3Query])

  return { mp3Error, mp3Result }
}