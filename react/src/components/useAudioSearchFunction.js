import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useSearchFunction(audioQuery, audioPageNumber, audioStartDateFilterState, audioEndDateFilterState) {
  const [audioLoading, setAudioLoading] = useState(true)
  const [audioError, setError] = useState(false)
  const [allAudioResults, setAllAudioResults] = useState([]);
  const [audioHasMore, setAudioHasMore] = useState(false)


  let yearStart = audioStartDateFilterState !== false ? `?year_start=${audioStartDateFilterState}` : '?year_start=1920';
  let yearEnd = audioEndDateFilterState !== false ? `&year_end=${audioEndDateFilterState}` : '&year_end=2050';


  useEffect(() => {
    setAllAudioResults([])
  }, [audioQuery])

  useEffect(() => {
    setAudioLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://images-api.nasa.gov/search${yearStart}${yearEnd}`,
      params: { q: audioQuery, page: audioPageNumber, media_type: "audio" },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setAllAudioResults(prevResults => {
          return [...new Set([...prevResults, 
            ...res.data.collection.items.map(item => item)
          ])]
        })
        setAudioHasMore(res.data.collection.links[0].prompt !== "NEXT")
        setAudioLoading(false)
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [audioQuery, audioPageNumber]
  )

  return { audioLoading, audioError, allAudioResults, audioHasMore }
}