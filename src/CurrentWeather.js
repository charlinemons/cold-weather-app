import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemp";

export default function CurrentWeather(props) {
  return (
    <div className="Current_weather">
      <div className="current-temp">
        <h1 id="city">{props.data.city}</h1>
        <p className="description">
          <FormatDate date={props.data.date} />
          <br />
          <span id="condition">{props.data.condition}</span>
        </p>
        <div className="row">
          <div className="col-6 d-flex">
            <span className="icon">
              <WeatherIcon code={props.data.icon} size={52} />
            </span>
            <div className="degree">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6">
            <div className="details">
              <ul>
                <li className="col-holder">
                  Humidity: <span id="humidity">{props.data.humidity}</span>%
                </li>
                <li className="col-holder">
                  Wind: <span id="wind">{props.data.wind}</span> km/h
                </li>
                <li className="col-holder">
                  Feels like: <span id="feels">{props.data.feels_like}</span> °C
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
