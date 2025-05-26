import axios from "axios";
import { WeatherDataTypes } from "../models/WeatherDataTypes";

const api_key = "356f7979af74ebde3cc51b1e6d41afc9";
const api_endpoint = "https://api.openweathermap.org/data/2.5/"

export const fetchCurrentWeather = async (
    lat:number, 
    lon:number
): Promise<WeatherDataTypes> => {
    try{
        const url = `${api_endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
        const response = await axios.get<WeatherDataTypes>(url);
        return response.data;
    } catch(error){
        console.error("Error fetching Weather Data: ", error);
        throw error;
    }
    }