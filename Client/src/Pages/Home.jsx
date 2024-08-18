import React from 'react'
import { Map } from '../Components/Map/Map'
const Home = () => {
  return (
    <div className='Home'>


        <h1 className='homeHead'>Home</h1>

        <div className='Map-grid'>
          <Map/>
        </div>
    </div>
  )
}

export default Home