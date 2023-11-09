import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="next-days">
      <h1>Next 7 days</h1>
      <div id="forecast" className="weather-forecast">
        <div class="col-2 forecast-days col-holder"></div>
        <div className="weather-forecast-date">today</div>
        <WeatherIcon code="rain-night" size={36} />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temp-max">19°</span>
          <span className="weather-forecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}
