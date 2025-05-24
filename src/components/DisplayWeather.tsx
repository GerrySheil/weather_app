import React from "react";
import { MainWrapper } from "./weather.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
import { BsFillSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFog2Fill } from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri"
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";

interface WeatherDataTypes{
    name: string;

    main: {
        temp: number;
        humidity: number;
    };
    sys:{
        country: string;
    };
    weather:{
        main: string;
    }[];
    wind:{
        speed: number;
    };

}


const DisplayWeather = () => {

    const api_key = "356f7979af74ebde3cc51b1e6d41afc9";
    const api_endpoint = "https://api.openweathermap.org/data/2.5/"

    const [weatherData, setWeatherData] = React.useState<WeatherDataTypes | null>(null);

    const [isLoading, setIsLoading] = React.useState(false);

    const [searchCity, setSearchCity] = React.useState("")

    const fetchCurrentWeather = async (lat:number, lon:number) => {
        const url = `${api_endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
        const response = await axios.get<WeatherDataTypes>(url);
        return response.data;
    }

    const fetchWeatherDataFromSearch = async(city:string) => {
        try{
            const url = `${api_endpoint}weather?q=${city}&appid=${api_key}&units=metric`
            const searchResponse = await axios.get<WeatherDataTypes>(url)
            const currentSearchResults:WeatherDataTypes = searchResponse.data
            return {currentSearchResults}
        } catch (error){
            console.error("data not found");
            throw error;
        }
    }

    const handleSearch = async () =>{
        if(searchCity.trim() === ""){
            return
        }

        try{
            const {currentSearchResults} = await fetchWeatherDataFromSearch(searchCity);
            setWeatherData(currentSearchResults);
        } catch(error){
            console.error("No Search Results")
        }
    }

    const iconChanger = (weather:string) => {
        let iconElement: React.ReactNode;
        let iconColor:string;

        switch(weather){
            case "Rain":
                iconElement = <BsFillCloudRainFill />
                iconColor="#272829";
            break;
            case "Clear":
                iconElement = <BsFillSunFill />
                iconColor="#FFC436";
            break;
            case "Clouds":
                iconElement = <BsCloudyFill />
                iconColor="#102C57";
            break;
            case "Mist":
                iconElement = <BsCloudFog2Fill />
                iconColor="#279EFF";
            break;
            default:
                iconElement = <TiWeatherPartlySunny/>
                iconColor="#782869"
        }

        return (
            <span className="icon" style={{color:iconColor}}>
                {iconElement}
            </span>
        )
    }

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            setIsLoading(true);
            fetchCurrentWeather(latitude, longitude)
                .then(setWeatherData)
                .catch(console.error);
        });
    }, []);

    return (
    <MainWrapper>
       <div className="container">
        <div className="searchArea">
            <input type='text' placeholder="search"
            value={searchCity}
            onChange={(e)=>{
                setSearchCity(e.target.value)
            }}
            />
            < div className="searchCircle">
                <AiOutlineSearch className='searchIcon' onClick={handleSearch}/>
            </div>
        </div>

        {weatherData && isLoading ?(
            <>
            <div className="weatherArea">
            <h1>{weatherData.name}</h1>
            <span>{weatherData.sys.country}</span>
            <div className="icon">
                {iconChanger(weatherData.weather[0].main)}
            </div>
            <h1>{weatherData.main.temp.toFixed(0)}°C</h1>
            <h2>{weatherData.weather[0].main}</h2>
        </div>
        <div className="bottomInfoArea">
            <div className="humidity">
                <WiHumidity className="humidityIcon"/>
                <div className="humidityInfo">
                    <h1>{weatherData.main.humidity}%</h1>
                    <p>Humidity</p>
                </div>
            </div>
            <div className="wind">
                <TiWeatherWindy className="windIcon"/>
                <div className="windInfo">
                    <h1>{weatherData.wind.speed.toFixed(0)}km/h</h1>
                    <p>Wind</p>
                </div>
            </div>
        </div>
        </>
        ):
        <div className="loading">
            <RiLoaderFill className="loadingIcon"/>
            <p>loading</p>
        </div>
        }
       </div>
    </MainWrapper>
    )
}

export default DisplayWeather