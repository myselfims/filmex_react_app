import React, { useEffect, useState } from 'react'
import './style.css'
import Carousel from '../Carousel/Carousel'
import useFetch from '../../../customhooks/useFetch'


const MovieListing = ({title,url}) => {
  const [database,setDatabase] = useState(null)
  const [currentTime, setCurrentTime] = useState('day')

  const {data,loading} = useFetch(url)

  const changeTime = (time) => {
    setCurrentTime(time)
  }

  useEffect(()=>{
    setDatabase(data)
  },[data])

  return (
    <div className="movieListing">
        <div className="listingHead">
          <label htmlFor="">{title}</label>
          {/* <div className="sortingBtns">
            <button
            onClick={()=>changeTime('day')}
             className={`${currentTime=='day'?'selected':''}`}>Day</button>
            <button
            onClick={()=>changeTime('week')}
             className={`${currentTime=='week'?'selected':''}`}>Week</button>
          </div> */}
        </div>
        <div className="cardListings">
          <Carousel data={data} loading={loading} />
        </div>
    </div>
  )
}

export default MovieListing
