import React, { useState } from 'react'
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
  let api_key = 'c2330486a810299eb250da3a850b4dff';
  const [wicon,setwicon]= useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityinput");
    
    if(element[0].value === ""){
      return alert("Please Enter City Name");
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json()


    const humidity = document.getElementsByClassName("humidity-perc");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-loc");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
    temprature[0].innerHTML= Math.floor(data.main.temp)+"° c";
    location[0].innerHTML = data.name;

    if(data.weather[0].value==="01d" || data.weather[0].value==="01n"){
      setwicon(clear_icon);
    }
    else if(data.weather[0].value==="02d" || data.weather[0].value==="02n"){
      setwicon(cloud_icon);
    }
    else if(data.weather[0].value==="03d" || data.weather[0].value==="03n"){
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].value==="04d" || data.weather[0].value==="04n"){
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].value==="09d" || data.weather[0].value==="09n"){
      setwicon(rain_icon);
    }
    else if(data.weather[0].value==="13d" || data.weather[0].value==="13n"){
      setwicon(snow_icon);
    }
    else{
      setwicon(clear_icon);
    }
  }


  return (
    <div className="container-main">
      <h1>Hey! Where do you plan to visit today?</h1>
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityinput" placeholder='Search' />
        <div className="search-icon" onClick={() => search()}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} className='cloud-icon' alt="" />
      </div>
      <div className="weather-temp"> 20°c</div>
      <div className="weather-loc">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-perc">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">30 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Weather_index
