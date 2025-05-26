import React from "react";
import { WeatherDataTypes } from "../models/WeatherDataTypes";

interface WeatherDisplayProps {
    data: WeatherDataTypes;
}

const DisplayWeather: React.FC<WeatherDisplayProps> = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.sys.country}</p>
      <p>{data.main.temp}°C</p>
      <p>{data.weather[0].main}</p>
    </div>
  );
};

export default DisplayWeather;