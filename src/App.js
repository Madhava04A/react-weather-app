import React from "react";
import { useState } from "react";
import "./App.css";
import Forecast from "./forecast";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});

  /////   URL and Options for the url ////
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "844351828cmsh5d14ff8467c209dp116bd9jsnd2243f3cc27d",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  //////  calling weather api and storing the response in state variable /////
  async function callWeatherData(e) {
    if (e.key === "Enter") {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherData(result);
        setCity("");
      } catch (error) {
        console.error(error);
      }
    }
  }
  async function btnSearchWeather(e) {
    {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherData(result);
        setCity("");
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
    <>
      <nav className="navbar">
        <input
          type="text"
          className="input-city"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={callWeatherData}
        />
        <button
          type="submit"
          className="submit-btn"
          onClick={btnSearchWeather}>
          search
        </button>
      </nav>
      <div className="App">
        <div className="display-result">
          {/*  Name of the Location */}
          {weatherData.location ? (
            <h2 className="city-title">
              Showing {weatherData.location.country},{" "}
              {weatherData.location.name}
              's Weather
            </h2>
          ) : null}

          {/*  Date of the location  */}
          {weatherData.location ? (
            <p className="date-time">{weatherData.location.localtime}</p>
          ) : null}

          {/*  Weather Data description */}
          {weatherData.current ? (
            <p className="main-data-description">
              {weatherData.current.condition.text}
            </p>
          ) : null}
        </div>

        <div className="main-data-container">
          {/*  Temperature at the location */}
          {weatherData.current ? (
            <p className="main-data-display">
              Temperature : {weatherData.current.temp_c}&deg;
            </p>
          ) : null}

          {/*  Temperature Feels like for the location */}
          {weatherData.current ? (
            <p className="main-data">
              Feels : {weatherData.current.feelslike_c}&deg;
            </p>
          ) : null}

          {/*  Wind Speed in the location */}
          {weatherData.current ? (
            <p className="main-data">
              Wind Speed : {weatherData.current.wind_kph + "kph"}
            </p>
          ) : null}

          {/*  Wind direction in the location */}
          {weatherData.current ? (
            <p className="main-data">
              Wind Direction : {weatherData.current.wind_dir}
            </p>
          ) : null}

          {/*  Forecast card */}
        </div>
        {weatherData.forecast ? (
          <Forecast forecast={weatherData.forecast} />
        ) : null}
      </div>
    </>
  );
}

export default App;
