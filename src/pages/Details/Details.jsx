import React, { useEffect, useState } from 'react'
import Img from '../../components/lazyLoad/lazyLoad'
import Ratings from '../../components/ratings/Ratings'
import {FaPlayCircle} from 'react-icons/fa'
import './style.css'
import CastCarousel from './castCarousel/CastCarousel'
import MovieListing from '../Home/movieListing/MovieListing'
import useFetch from '../../customhooks/useFetch'
import { useParams } from 'react-router-dom'
import Player from '../../components/player/Player'
import Genres from '../../components/genres/Genres'
import Videos from './videos/Videos'
import fetchDataFromApi from '../../utils/Api'

const Details = () => {
  const {mediatype, id} = useParams()
  const [data, setData] = useState(null)
  const [videos, setVideos] = useState(null)
  const [player, setPlayer] = useState(false)
  const [videoId, setVideoId] = useState(null)

  const togglePlayer = (id)=>{
    if (player){
      setPlayer(false)
    }else{
      setPlayer(true)
      if (id=='Trailer'){
        let trailer = videos?.results?.filter((item)=>String(item.type).includes('Trailer'))
        setVideoId(trailer[0].key)
      }else{
        setVideoId(id)
      }
    }
  }

  useEffect(()=>{
    setData(null)
    fetchDataFromApi(`/${mediatype}/${id}`).then((res)=>{
      setData(res)
    })
    fetchDataFromApi(`/${mediatype}/${id}/videos`).then((res)=>setVideos(res))
    window.scrollTo({top:0,behavior:'smooth'})
  },[id])


  const skeleton = ()=>{
    return(
    <div className="detailSkeleton">
      <div className="skeleton posterBlock"></div>
      <div className="infoBlock">
        <div className="skeleton titleBlock"></div>
        <div className="skeleton sloganBlock"></div>
        <div className="skeleton sloganBlock"></div>
        <div className="skeleton btnsBlock"></div>
        <div className="skeleton overviewBlock"></div>
        <div className="skeleton statusBlock"></div>
        <div className="skeleton statusBlock"></div>
        <div className="skeleton statusBlock"></div>
      </div>
    </div>
    )
  }

  return (
    <div className='detailsPage'>
      <div className="background">
        <Img key={data?.id} image={{
          src:`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`,
        }}/>
        <div className="fadeEffect"></div>
      </div>
      <div className="content">
        {data?
        <div className="itemDetails">
          <div className="poster">
            <Img key={data?.id} image={{
              src:`https://image.tmdb.org/t/p/original/${data?.poster_path}`,
              }}/>
          </div>
          <div className="info">
            <h1>{data?.title? data?.title:data?.original_name}</h1>
            <p><em>{data?.tagline}</em></p>
            <div className="genresDiv">
              <Genres data={data?.genres?.slice(0,3)}/>
            </div>
            <div className="btns">
              <Ratings value={data?.vote_average}/>
              <FaPlayCircle onClick={()=>togglePlayer('Trailer')} /><h3>Watch Trailor</h3>
            </div>
            <div className="desc">
              <h1>Overview</h1>
              <p>{data?.overview}</p>
            </div>
            <div className="detail">
              <div>
                <div><strong>Status: </strong><p>{' '+data?.status}</p></div>
                {data?.release_date?
                <div><strong>Release Date: </strong> <p>{' '+data?.release_date}</p></div>
                
                :
                <div><strong>Last episode date: </strong> <p>{' '+data?.last_air_date}</p></div>
                
                }

                {data?.runtime?
                <div><strong>Runtime: </strong> <p>{' '+data?.runtime}</p></div>
                
                :
                <div><strong>Total seasons: </strong> <p>{' '+data?.number_of_seasons}</p></div>
                
                }

              </div>
              <div>
                <strong>Director:</strong>
              </div>
              <div>
                <strong>Writer:</strong>
              </div>
            </div>
          </div>
        </div>
        :
        <>
        {skeleton()}
        </>
        }
        
        <div className="cast">
          <CastCarousel  key={data?.id} />
        </div>

        <div className="officialVidoes">
          <Videos key={data?.id} togglePlayer={togglePlayer} data={videos}/>
        </div>

        <div className="recommended">
        <MovieListing key={data?.id} title={'Similar'} url={`/${mediatype}/${id}/similar`}/>
        </div>
      </div>
      <div className="player">
        {player?<Player togglePlayer={togglePlayer} Videoid={videoId} />:null}
      </div>
    </div>
  )
}

export default Details
