import React, { useEffect } from 'react'
import './style.css'
import Img from '../lazyLoad/lazyLoad'
import Ratings from '../ratings/Ratings'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  // console.log(data)

  const checkTitle = (title)=>{
    if (title.length>25){
      return title.slice(0,25) + '...'
    }else {
      return title
    }
  }

  return (
    <Link to={`${data.media_type? `/${data.media_type}/${data.id}`:`/tv/${data.id}`}`}>
      <div className='movieCard'>
        <div className="poster">
          <Img image={{
            src:`https://image.tmdb.org/t/p/w500${data?.poster_path}`,
            width:'13.5rem',
            height : '18rem'
          }}/>
        </div>

        <div className="rating">
          <Ratings value={data?.vote_average} size={3}/>
        </div>
        <div className="movieInfo">
          <h4>{data?.title? checkTitle(data.title):checkTitle(data.original_name)}</h4>
        </div>
      </div>
    </Link>
  )
}

export default Card
