import React, { useState,useEffect,useMemo } from 'react';
import './style.css'
import useFetch from '../../customhooks/useFetch'
import { useParams } from 'react-router-dom';
import fetchDataFromApi from '../../utils/Api';
import Card from '../../components/card/Card';
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../../components/loading/Loading';
import TopMover from '../../components/moveToTop/TopMover';

const Browse = () => {
  const {mediatype} = useParams()
  const [genres, setGenres] = useState([])
  const [currentGenre, setGenre] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const d = useMemo


  const initialFetch = ()=>{
    setLoading(true)
    fetchDataFromApi(`/discover/${mediatype}?page=${pageNum}`).then((res)=>{
      setLoading(false)
      setData(res.results)
    })
  }

  const fetchNext = ()=>{
    setPageNum(pageNum+1)
    let g = currentGenre? `&with_genres=${currentGenre}` : '' 
    fetchDataFromApi(`/discover/${mediatype}?page=${pageNum}${g}`).then((res)=>{
      setData(data.concat(res.results))
    })
  }

  const fetchDataByGenre = (genre)=>{
    setLoading(true)
    setGenre(genre)
    fetchDataFromApi(`/discover/${mediatype}?page=${pageNum}&with_genres=${genre}`).then((res)=>{
      setLoading(false)
      setData(res.results)
    })
  }


  useEffect(()=>{
    initialFetch()
    fetchDataFromApi(`/genre/${mediatype}/list`).then((res)=>{
      setGenres(res.genres)
    })
  },[mediatype])

  return (
    <div key={mediatype} className='browsePage'>
      <div className="content">
        <div className="head">
          <h3>Explore {mediatype==='tv'?'TV Shows':'Movies'}</h3>
          <div className="filters">
              <select onChange={(e)=>fetchDataByGenre(e.target.value)} name="" id="">
                <option value="" defaultChecked={currentGenre?true:false}>Select Genres</option>
                {genres?.map((item)=>{
                  return (
                    <option key={item.id} value={item.id}>{item?.name}</option>
                  )
                })}
              </select>
          </div>
        </div>
        {loading?
        <Loading/>
        :
          <InfiniteScroll
          dataLength={data?.length}
          hasMore={true}
          loader={<Loading/>}
          next={fetchNext}
          >
        <div key={currentGenre+mediatype} className="body">

            {data?.map((item)=>{
              return <Card key={item.id+currentGenre+mediatype} data={item}/>
            })}

          <TopMover />
        </div>
          </InfiniteScroll>}
      </div>
    </div>
  )
}

export default Browse
