import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            icon: `https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png`,
            description: response.data.weather[0].description,
            date: "Saturday 19:00",
        });
    }

    if (weatherData.ready) {
        return(
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Submit" className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
                {weatherData.date}
            </li>
            <li className="text-capitalize">
                {weatherData.description}
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src={weatherData.icon} alt="Weather icon" />
                <span className="temp">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                       Humidity: {weatherData.humidity}%
                    </li>
                    <li>
                        Wind speed: {Math.round(weatherData.wind)}{" "}km/h
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
    } else{
          let apiKey = "24cbb227a292bf17ca3c87528c81b35f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return(
        <div>
        "Loading..."
        </div>
    )
    }
    
}