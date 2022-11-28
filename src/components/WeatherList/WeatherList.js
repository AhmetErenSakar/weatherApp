import React, { useContext, useEffect } from 'react'
import { useWeather } from '../../context/setcontext'
import './WeatherList.css'



function WeatherList() {

  const { weath, forecastDays } = useWeather()
  const weatherr = weath.slice(0, 6)
  console.log(weatherr);
  return (
    <>
      {weatherr.map((item, i) => {
        return (
          <div className={i === 0 ? 'today' : 'weatherContainer'}>
            <p className={'h1'}>{i === 0 ? 'Today' : forecastDays[i]}</p>
            <p className={'h1'}>temperature:{item.main.temp}°C</p>
            <img alt='weather' src={`icons/${item.weather[0].icon}.png`} />
          </div>
        )
      })}
    </>
  )
}

export default WeatherList