import React from "react";
import Axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "1fabbbt6e694149ea2da3obbe200ebf2";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  Axios.get(apiUrl).then(handleResponse);

  return (
    <div className="next-days">
      <h1>Next 7 days</h1>
      <div id="forecast" className="weather-forecast">
        <div class="col-2 forecast-days col-holder">
          <div className="weather-forecast-date">today</div>
          <WeatherIcon code="rain-night" size={36} />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temp-max">19°</span>
            <span className="weather-forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
