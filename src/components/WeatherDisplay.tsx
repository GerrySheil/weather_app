import React from "react";
import { WeatherDataTypes } from "../models/WeatherDataTypes";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
import { MainWrapper } from '../styles/weather.styled';
import { RiLoaderFill } from "react-icons/ri"
import { IconBaseProps } from "react-icons";
import { iconChanger } from "../utils/iconChanger";

interface WeatherDisplayProps {
    data: WeatherDataTypes;
    loading: boolean;
    onSearch: (city: string) => void;
    searchCity: string;
    setSearchCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchIcon = AiOutlineSearch as React.FC<IconBaseProps>;
const HumidityIcon = WiHumidity as React.FC<IconBaseProps>;
const WindIcon = TiWeatherWindy as React.FC<IconBaseProps>;
const LoadingIcon = RiLoaderFill as React.FC<IconBaseProps>;

const DisplayWeather: React.FC<WeatherDisplayProps> = ({ data, loading, onSearch, searchCity, setSearchCity }) => {
  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
            <input
                type="text"
                placeholder="Search..."
                value= {searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
/>
            < div className="searchCircle">
                 <SearchIcon className='searchIcon' onClick={()=>onSearch(searchCity)}/>
            </div>

        </div>
        {loading ?(
        <div className="loading">
            <LoadingIcon className="loadingIcon"/>
            <p>loading</p>
        </div>        
        ): data ?(
        <>
            <div className="weatherArea">
                <h1>{data.name}</h1>
                <span>{data.sys.country}</span>
            <div className="icon">
                {iconChanger(data.weather[0].main).icon}
            </div>
                <h1>{data.main.temp.toFixed(0)}°C</h1>
                <h2>{data.weather[0].main}</h2>
            </div>
            <div className="bottomInfoArea">
                <div className="humidity">
                    <HumidityIcon className="humidityIcon"></HumidityIcon>
                    <div className="humidityInfo">
                        <h1>{data.main.humidity}%</h1>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="wind">
                    <WindIcon className="windIcon"></WindIcon>
                    <div className="windInfo">
                        <h1>{data.wind.speed.toFixed(0)}km/h</h1>
                        <p>Wind</p>
                    </div>
                </div>
            </div>
        </>
        ) :
        null}
        </div>
    </MainWrapper>
  );
};

export default DisplayWeather;