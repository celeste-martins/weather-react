import React from "react";
import "./styles.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: -2,
    date: "Sunday, 09:16",
    description: "Cloudy",
    imgUrl:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/028/128/original/cloud.png?1645860303",
    humidity: 65,
    wind: 6,
  };
  return (
    <div className="Weather">
      <form className="mb-3 navigation">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search..."
              autoComplete="off"
              className="city-input"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="seach-button" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last updated: {weatherData.date}</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="actual-temperature">
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">°C</a>
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-description">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="weather-img"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="wind-humidity">
            <h2>{weatherData.description}</h2>
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
            <div>
              <footer>
                <a href="https://github.com/celeste-martins/weather-react">
                  Open-source code
                </a>{" "}
                by Celeste Martins
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
