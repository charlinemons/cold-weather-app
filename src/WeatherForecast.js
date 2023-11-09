import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function Weather() {
  return (
    <div className="next-days">
      <h1>Next 7 days</h1>
      <div id="forecast" className="weather-forecast">
        <div class="col-2 forecast-days col-holder">
          <div className="weather-forecast-date">Thu</div>
          <span className="icon-forecast">
            <WeatherIcon code="clear-sky-day" size={36} />
          </span>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temp-max">12°</span>
            <span className="weather-forecast-temp-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
