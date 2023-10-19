import React, { useEffect } from 'react'
import Img from '../../../components/lazyLoad/lazyLoad'
import './style.css'

const ArtistCard = ({item}) => {

  
  return (
    <a href={`https://www.google.com/search?q=${item.name}`}>
    <div className='artistCard'>
      <Img image={{src:`${item.profile_path?`https://image.tmdb.org/t/p/original${item.profile_path}`:'https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg'}`}}/>
      <h5>{item.name}</h5>
      <h5 className='charName'>{item.character}</h5>
    </div>

    </a>
  )
}

export default ArtistCard
