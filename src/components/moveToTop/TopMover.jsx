import React,{useEffect, useState} from 'react'
import {BiSolidUpArrowCircle} from 'react-icons/bi';
import './style.css'

const TopMover = () => {
    const [mover,setMover] = useState(false)

    const controllNavbar = ()=>{
        if (window.scrollY>=400){
          setMover(true)
        } else if(window.scrollY<10){
          setMover(false)
        }
      }


    
      useEffect(()=>{
        window.addEventListener('scroll',controllNavbar)
    
        return () => {
          window.removeEventListener('scroll', controllNavbar)
        }
      },[])

      const moveToTop = ()=>{
        window.scrollTo({top:0,behavior:'smooth'})
      }

  return (
    <>
    {mover?
    <div className='topMover'>
      <BiSolidUpArrowCircle onClick={moveToTop}/>
    </div>
    :null}
    </>
  )
}

export default TopMover
