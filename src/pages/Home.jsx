import React from 'react'
import Slider from '../compnents/Slider'
import HighestRated from '../compnents/HighestRated'
import MostPopular from '../compnents/MostPopular'
import NewsLetter from '../compnents/NewsLetter'

const Home = () => {
  return (
    <div>
        <Slider></Slider>
        <HighestRated></HighestRated>
        <MostPopular></MostPopular>
        <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home