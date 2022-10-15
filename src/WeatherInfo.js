import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return ( 
        <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
        <ul>
            <li>
                <FormatedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">
                {props.data.description}
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <WeatherIcon code={props.data.icon} />
                <WeatherTemperature celsius={props.data.temperature}/>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                       Humidity: {props.data.humidity}%
                    </li>
                    <li>
                        Wind speed: {Math.round(props.data.wind)}{" "}km/h
                    </li>
                </ul>
            </div>
        </div>
        </div>
        );
}