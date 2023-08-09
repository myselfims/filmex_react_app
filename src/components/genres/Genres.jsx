import React, { useEffect } from 'react'
import './style.css'
import { useSelector } from 'react-redux'

const Genres = ({data}) => {
    
  return (
    <div className='genresMain'>
        {data?.map((item)=>{
            return (
                <div key={item.id} className="genres">{item.name}</div>
            )
        })}
    </div>
  )
}

export default Genres
