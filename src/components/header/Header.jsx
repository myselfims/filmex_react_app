import React,{useEffect, useRef, useState} from 'react'
import './style.css';
import { HiOutlineSearch } from "react-icons/hi";
import {MdOutlineCancel} from "react-icons/md";
import { ImCross } from 'react-icons/im';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [input, setInput] = useState('')
  const inputElem = useRef()
  const [searchBox, setSearchBox] = useState(false)
  const [navshow, setNavShow] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [active, setActive] = useState('home')
  const navigate = useNavigate()

  const enterKeySearch = (e)=>{
    if (e.key === 'Enter'){
      handleSearch()
    }
  }

  const controllNavbar = ()=>{
    if (window.scrollY>=200){
      setNavShow(true)
    } else if(window.scrollY<10){
      setNavShow(false)
    }
  }

  const handleLinkClick = (btn) => {
    setMobileNav(false)
    setActive(btn)
  }

  useEffect(()=>{
    window.addEventListener('scroll',controllNavbar)

    return () => {
      window.removeEventListener('scroll', controllNavbar)
    }
  },[])

  

  const handleSearch = ()=>{
      if (input!=''){
        setSearchBox(false)
        navigate(`/search/${input}`)
        setInput('')
      }
  }

  return (
    <header>
      <div className={`header ${navshow?'show':null}`}>
        <nav>
          <div className="navBar">
            <div className="logo">
              <img src="https://image.xumo.com/v1/channels/channel/99951120/600x600.webp?type=color_onBlack" alt="logo" />
            </div>
            <div className={`navLinks ${!mobileNav?'hide':'showNav'}`}>
              <ul>
                <li><Link className={`${active=='home'?'active':null}`} onClick={()=>handleLinkClick('home')} to={'/'}>Home</Link></li>
                <li><Link className={`${active=='movies'?'active':null}`} onClick={()=>handleLinkClick('movies')} to={'/browse/movie'}>Movies</Link></li>
                <li><Link className={`${active=='tv'?'active':null}`} onClick={()=>handleLinkClick('tv')} to={'/browse/tv'}>TV Shows</Link></li>
                {/* <li><Link to={'/'}>Home</Link></li> */}
              </ul>
            </div>
            <div className="searchDiv">
              {!searchBox?
              <HiOutlineSearch onClick={()=>setSearchBox(true)}/>
              :
              <ImCross onClick={()=>setSearchBox(false)}/>}
              {!mobileNav?
              <GiHamburgerMenu className='hamburger' onClick={()=>setMobileNav(true)}/>
              :
              <ImCross onClick={()=>setMobileNav(false)}/>}
            </div>
            {searchBox?
            <div className="searchBox">
              <div>

                <input 
                autoFocus
                ref={inputElem}
                placeholder='Search a movie or tv show'
                onKeyUp={enterKeySearch}
                 onChange={(e)=>setInput(e.target.value)} type="text" value={input}/>
                {input!=''?
                <MdOutlineCancel onClick={()=>setInput('')}/>
                :null}
                <button onClick={handleSearch}>Search</button>
              </div>
            </div>
            :null
            }
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
