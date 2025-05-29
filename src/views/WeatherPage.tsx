import React from "react";
import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import WeatherDisplay from "../components/WeatherDisplay";

const WeatherPage = () => {
  const [searchCity, setSearchCity] = useState("");
  const { data, loading, searchCityHandler } = useWeather();

  return (
    <WeatherDisplay
      data={data}
      loading={loading}
      searchCity={searchCity}
      setSearchCity={setSearchCity}
      onSearch={searchCityHandler}
    />
  );
};

export default WeatherPage;
