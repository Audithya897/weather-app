import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');

  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");

  function handlecity(evt)
  {
     setCity(evt.target.value);
  }

  function getWeather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bd7aedf3141850609f60e42e7a455d1`)

    weatherData.then(function(response){
      console.log(response.data);
      setWeather(response.data.weather[0].main);
      setTemp((response.data.main.temp - 273.15).toFixed(2));
      setDesc(response.data.weather[0].description);
    })
  }



  return (
    <div className="main-container">
      <div className="weather-card">
        <h1>Weather Report</h1>
        <p className="subtitle">I can give you a weather report about your city !</p>
        
        <input 
          type="text" 
          placeholder="Enter your City Name" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />
        
        <button onClick={getWeather} className="get-report-btn">
          Get Report
        </button>
        
        <div className="weather-info">
          <p>Weather: {weather}</p>
          <p>Temperature: {temp}</p>
          <p>Description: {desc}</p>
        </div>
      </div>
    </div>
  );
}

export default App;