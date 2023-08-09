import React, { useEffect } from 'react'
import ArtistCard from '../artistCard/ArtistCard'
import './style.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../../customhooks/useFetch'

const CastCarousel = (props) => {
  const {mediatype,id} = useParams()
  const {data, loading} =  useFetch(`/${mediatype}/${id}/credits`)

  const skeleton = ()=>{
    return (
      <div className="castSkeleton">
        <div className="skeleton circleImage"></div>
        <div className="skeleton title"></div>
        <div className="skeleton title"></div>
      </div>
    )
  }
  return (
    <div className='castCarousel'>
      <h3>Top Cast</h3>
      <div className="carousel">
        {data?
        <>
        {data?.cast?.map((item)=>{
          return <ArtistCard key={item.id} item={item}/>  
        })}
        </>
        :
        <>
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        </>
      }
      </div>
    </div>
  )
}

export default CastCarousel
