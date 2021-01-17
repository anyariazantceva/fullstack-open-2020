import React from "react";

const Weather = ({ weather }) => {
  return (
    <div>
      <h2>Weather in {weather.location.name}</h2>
      <div>
        <p>Temperature: </p>
        <p>{weather.current.temperature} &deg; Celsius</p>
      </div>
      <div>
        <img
          src={weather.current.weather_icons[0]}
          alt={weather.current.weather_descriptions[0]}
        />
      </div>
      <div>
        <p>Wind: </p>
        <p>{weather.current.wind_speed} mph </p>
        <p>direction {weather.current.wind_dir}</p>
      </div>
    </div>
  );
};

export default Weather;
