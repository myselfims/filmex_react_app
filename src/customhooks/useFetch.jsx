import React,{useState,useEffect} from 'react'
import fetchDataFromApi from '../utils/Api'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
      setLoading('loading')
      setData(null)
      setError(null)

      fetchDataFromApi(url).then((res)=>{
        setData(res)
        setLoading(false)
      }).catch((err)=>{
        setLoading(false)
        setError(err)
      })
    },[])

  return {data, loading, error}
}

export default useFetch;
