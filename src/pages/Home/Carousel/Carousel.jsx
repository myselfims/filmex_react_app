import React, { useRef } from 'react'
import './style.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Card from '../../../components/card/Card';

const Carousel = ({data, loading}) => {
  const carouselItems = useRef()

  const scroll = (direction)=>{
    let object = carouselItems.current
    let amount = direction === 'left'? object.scrollLeft - (object.offsetWidth+10)
    : 
    object.scrollLeft + (object.offsetWidth+10)

    object.scrollTo(
      amount,0
    )

  }

    const shimmer = () =>{
        return (
            <div className='cardSkeleton'>
                <div style={{width:'13.5rem',height:'18rem'}} className="skeleton"></div>
                <div style={{width:'10rem',height:'1rem'}} className="skeleton"></div>
                <div style={{width:'8rem',height:'1rem'}} className="skeleton"></div>
            </div>
        )
    }
  return (
    <div className='carousel '>
      <div className="navigations">
        <FaArrowAltCircleLeft onClick={()=>scroll('left')}/>
        <FaArrowAltCircleRight onClick={()=>scroll('right')}/>
      </div>
      <div ref={carouselItems} className="items">
        {data ? 
        data?.results?.map((item)=>{
            return <Card key={item.id} data={item}/>
        })
        :
        <div className="Skeleton">
            {shimmer()}
            {shimmer()}
            {shimmer()}
            {shimmer()}
            {shimmer()}
            {shimmer()}
            
        </div>
        }
        
      </div>
    </div>
  )
}

export default Carousel
