import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../customhooks/useFetch'

const Player = ({togglePlayer,Videoid}) => {

  useEffect(()=>{
    window.scrollTo({top:0,behavior:'smooth'})
    setTimeout(() => {
      window.addEventListener('scroll',togglePlayer)
      
    }, 1000);

    return ()=>{
      window.removeEventListener('scroll', togglePlayer)
    }
    
  },[Videoid])

  return (
    <div className='playerBase'>
        <div className="player">
            <button onClick={togglePlayer}>Close</button>
            <iframe src={`https://www.youtube.com/embed/${Videoid}`} title={'hello'} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Player
