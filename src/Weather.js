import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels_like: response.data.temperature.feels_like,
      condition: response.data.condition.description,
      icon_url: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1fabbbt6e694149ea2da3obbe200ebf2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row mobile">
            <div className="col-md-8">
              <input
                className="placeholder"
                type="search"
                id="city-input"
                autoFocus="on"
                placeholder="Type a city"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-4">
              <input
                className="btn-primary col-md-2 submit"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <CurrentWeather data={weather} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
