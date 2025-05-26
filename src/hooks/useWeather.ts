import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../api/weatherApi";
import { WeatherDataTypes } from "../models/WeatherDataTypes";

export const useWeather = () => {
    const [data, setData] = useState<WeatherDataTypes | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            fetchCurrentWeather(latitude, longitude)
                .then((res) => setData(res))
                .finally(() => setLoading(false))
        });
    }, []);

    return { data, loading};
}