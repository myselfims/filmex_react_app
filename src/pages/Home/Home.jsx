import React from 'react'
import './style.css'
import HeroBanner from './heroBanner/HeroBanner';
import MovieListing from './movieListing/MovieListing';

const Home = () => {
  return (
    <div className='wrapper homePage'>
      <HeroBanner/>
      <div className="homeBody">
        <div className="trending">
          <MovieListing title={'Trending'} url={'/trending/all/day'}/>
        </div>
        <div className="Tv">
          <MovieListing title={'Trending TV'} url={'/trending/tv/day'}/>
        </div>
      </div>
    </div>
  )
}

export default Home
