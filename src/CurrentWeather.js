import SunImage from "./images/sun.gif";
import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      degrees: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b6520355a84f46a27e6fe4523cdc2546";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Search a city.."
            className="form-control"
            id="city-input"
            autoComplete="off"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="overview">
          <h1 id="city">{city}</h1>
          <ul>
            <li id="date">Last updated: 08/02/2022</li>
            <li id="description">{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={SunImage}
                alt="Clear"
                id="icon"
                width="80"
                className="float-left"
              />
              <div className="float-left">
                <strong id="temperature">{Math.round(weather.degrees)}</strong>
                <span className="units">
                  <a href="/" id="celsius-link" className="active">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" id="fahrenheit-link">
                    °F{" "}
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">{weather.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{Math.round(weather.wind)} </span>
                km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <div className="overview">
          <h1 id="city">Lisbon</h1>
          <ul>
            <li id="date">Last updated: 08/02/2022</li>
            <li id="description"> Clear Sky</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={SunImage}
                alt="Clear"
                id="icon"
                width="80"
                className="float-left"
              />
              <div className="float-left">
                <strong id="temperature">90</strong>
                <span className="units">
                  <a href="/" id="celsius-link" className="active">
                    °C
                  </a>{" "}
                  |{" "}
                  <a href="/" id="fahrenheit-link">
                    °F{" "}
                  </a>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">50%</span>%
              </li>
              <li>
                Wind: <span id="wind">5 </span>
                km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
