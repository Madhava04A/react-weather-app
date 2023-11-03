import React from "react";

const Forecast = (forecast) => {
  const dayOne = forecast.forecast ? forecast.forecast.forecastday[0] : null;
  console.log(dayOne);
  return (
    <div className="forecast-1">
      {/*  Forecast Date */}
      {dayOne.date ? (
        <p className="forecast-description">
          Forecast for Tomorrow,{dayOne.date}
        </p>
      ) : null}

      {/* Weather Forecast Description */}
      {dayOne.day ? (
        <p className="forecast-details">{dayOne.day.condition.text}</p>
      ) : null}

      {/* Average Temperature */}
      <div className="forecast-details">
        {dayOne.day ? (
          <p className="forecast-details">
            Average Temp : {dayOne.day.avgtemp_c}&deg;
          </p>
        ) : null}

        {/* Average Humidity */}
        {dayOne.day ? (
          <p className="forecast-details">
            Average Humidity : {dayOne.day.avghumidity}
          </p>
        ) : null}

        {/* Chances of Rain*/}
        {dayOne.day ? (
          <p className="forecast-details">
            Chances of Rain : {dayOne.day.daily_chance_of_rain}
          </p>
        ) : null}
        {/* Max wind speed */}
        {dayOne.day ? (
          <p className="forecast-details">
            Max Wind Speed : {dayOne.day.maxwind_kph + "kph"}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Forecast;
