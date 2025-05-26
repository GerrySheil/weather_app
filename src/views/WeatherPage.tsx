import React from "react";
import { useWeather } from "../hooks/useWeather";
import WeatherDisplay from "../components/WeatherDisplay";

const WeatherPage = () => {
  const { data, loading } = useWeather();

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Failed to fetch weather.</p>;

  return <WeatherDisplay data={data} />;
};

export default WeatherPage;