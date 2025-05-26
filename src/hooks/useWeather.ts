import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/weatherApi";
import { WeatherDataTypes } from "../models/WeatherDataTypes";
import { fetchWeatherDataFromSearch } from "../api/weatherApi";


export const useWeather = () => {
    const [data, setData] = useState<WeatherDataTypes | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            fetchCurrentWeather(latitude, longitude)
                .then((res) => setData(res))
                .finally(() => setLoading(false))
        },
    (error)=>{
        console.error("Geolocation error:", error);
            setLoading(false);
    });
    }, []);

    const searchCityHandler = async (city: string) => {
    if (city.trim() === "") return;
    try {
      setLoading(true);
      const result = await fetchWeatherDataFromSearch(city);
      setData(result.currentSearchResults);
    } catch (e) {
      console.error("Search failed", e);
    } finally {
      setLoading(false);
    }
  };

    return { data, loading, searchCityHandler};
}