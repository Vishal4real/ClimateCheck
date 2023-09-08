import React from 'react'
import './weatherapp.css';

import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import clear_icon from '../assets/clear.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather_index = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityinout" placeholder='Search'/>
            <div className="search-icon">
                <img src={search_icon} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Weather_index
