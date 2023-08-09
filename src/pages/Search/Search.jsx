import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import Card from '../../components/card/Card'
import useFetch from '../../customhooks/useFetch'
import fetchDataFromApi from '../../utils/Api'

const Search = () => {
  const {query} = useParams()
  const [data, setData] =  useState([])
  const [pageNum, setPageNum] = useState(1)

  const initialFech = ()=>{
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
      setData(res.results)
    })
  }
  
  useEffect(()=>{
    initialFech()
  },[query])

  return (
    <div className='searchPage'>
      <div className="content">
        <div className="head">
          <h3>Search results of "{query}"</h3>
        </div>
        <div className="results">
            {data?.map((item)=>{
              return <Card key={item.id} data={item}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Search
