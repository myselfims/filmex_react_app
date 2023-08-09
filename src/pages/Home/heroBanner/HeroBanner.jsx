import React, { useEffect, useState } from 'react'
import './style.css'
import '../../../assets/IMG_20221016_140255_264.jpg'
import useFetch from '../../../customhooks/useFetch'
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
    const navigate = useNavigate()
    const {data, loading, error} = useFetch('/trending/movie/day')
    const [background, setBackground] = useState(null)
    const [input, setInput] = useState('')

    useEffect(()=>{
      let bg = data?.results[Math.floor(Math.random()*20)]?.backdrop_path
      setBackground(bg)
    },[data])

    const handleSearch = ()=>{
      if (input!=''){
        navigate(`/search/${input}`)
      }
    }

    return (
      <div className='heroBanner'>
        <div className="background">
            <img src={`https://image.tmdb.org/t/p/original${background}`} alt="" />
            <div className="fadeEffect"></div>
        </div>
        
        <div className="heroBannerContent">
            <h1>Welcome</h1>
            <p>Explore your favorite movies and tv shows.</p>
            <div className="inputBox">
                <span>
                    <input
                    onChange={(e)=>setInput(e.target.value)}
                    value={input}
                    type="text"  placeholder='Search any movie or tv show' />
                </span>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>

      </div>
    )
  }

export default HeroBanner;
