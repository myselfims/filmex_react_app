import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Search from './pages/Search/Search';
import Details from './pages/Details/Details'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchDataFromApi from './utils/Api';
import { useEffect } from 'react';
import { getGenres } from './store/homeSlice';

function App() {

  const dispatch = useDispatch()
  const data = useSelector((state)=>state.home)

  const genresCall = async ()=>{
    const endpoint = ['tv','movie']
    const promises = []
    const allgenres = {}
    endpoint.forEach((item)=>{
      promises.push(fetchDataFromApi(`/genre/${item}/list`))
    })

    const data = await Promise.all(promises)

    data.map(({genres})=>{
      return genres.map((item)=>(allgenres[item.id]=item))
    })

    dispatch(getGenres(allgenres))

  }

  useEffect(()=>{
    genresCall()
    console.log('state',data)
  },[])

  return (
    <>
    <div className="container">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/browse/:mediatype' element={<Browse/>} />
          <Route path='/search/:query' element={<Search/>} />
          <Route exact path='/:mediatype/:id' element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
