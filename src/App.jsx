import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import HeaderSlider from './Component/HeaderSlider'
import ProductionHouse from './Component/ProductionHouse'
import GenereMovieList from './Component/GenereMovieList'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div className=''>
    <Header/>
    <HeaderSlider/>
    <ProductionHouse/>
    <GenereMovieList/>
    </div>
     
    </>
  )
}

export default App
