import { WeatherDataTypes } from "../models/WeatherDataTypes";

export const mockWeatherData: WeatherDataTypes = {
  name: "Dublin",
  sys: { country: "IE" },
  main: { temp: 12, humidity: 60 },
  weather: [{ main: "Clouds" }],
  wind: { speed: 10 },
};