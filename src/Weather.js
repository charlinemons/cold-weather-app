import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form id="search-form">
        <div class="row mobile">
          <div class="col-md-8">
            <input
              class="placeholder"
              type="text"
              id="city-input"
              autocomplete="off"
              placeholder="Type a city"
            />
          </div>
          <div class="col-md-4">
            <input
              class="btn-primary col-md-2 submit"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>

      <div class="current-temp">
        <h1 id="city">Montreal</h1>
        <p class="description">
          <span id="date"></span>
          <br />
          <span id="condition"></span>
        </p>
        <div class="row">
          <div class="col-6">
            <div class="d-flex weather-temperature">
              <img src="" alt="" id="icon" />
              <div class="degree">
                <strong id="temperature">13</strong>
                <span class="units">°C | °F</span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="details">
              <ul>
                <li class="col-holder">
                  Humidity: <span id="humidity">12</span>%
                </li>
                <li class="col-holder">
                  Wind: <span id="wind"></span>12 km/h
                </li>
                <li class="col-holder">
                  Feels like: <span id="feels">12</span> °C
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
