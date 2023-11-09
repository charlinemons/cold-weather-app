import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div class="col-2 forecast-days col-holder">
      <div className="weather-forecast-date">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={24} />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temp-max">{maxTemperature()}</span>
        <span className="weather-forecast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
