import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form id="search-form">
        <div className="row mobile">
          <div className="col-md-8">
            <input
              className="placeholder"
              type="text"
              id="city-input"
              autocomplete="off"
              placeholder="Type a city"
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

      <div className="current-temp">
        <h1 id="city">Montreal</h1>
        <p class="description">
          <span id="date"></span>
          <br />
          <span id="condition"></span>
        </p>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src="" alt="" id="icon" />
              <div className="degree">
                <strong id="temperature">13</strong>
                <span className="units">°C | °F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="details">
              <ul>
                <li className="col-holder">
                  Humidity: <span id="humidity">12</span>%
                </li>
                <li className="col-holder">
                  Wind: <span id="wind"></span>12 km/h
                </li>
                <li className="col-holder">
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
