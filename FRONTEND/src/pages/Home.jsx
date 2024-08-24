import React, { useState } from 'react'
import Header from '../component/Header'
import ExploreMenu from '../component/ExploreMenu'
import FoodDisplay from '../component/FoodDisplay'
import AppDownload from '../component/AppDownload'

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div>
        <Header />
        <div id="explore-menu">
            <ExploreMenu category={category} setCategory={setCategory}/>
        </div>
        <div id="food-display">
            <FoodDisplay category={category}/>
        </div>
        <div id="app-download">
            <AppDownload />
        </div>
    </div>
  )
}

export default Home
