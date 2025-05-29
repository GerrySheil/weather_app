import React from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import { WeatherDataTypes } from "../models/WeatherDataTypes";
import { mockWeatherData } from "../mocks/weatherMocks";
import { render } from "@testing-library/react";

export function renderWithStateAndMocks() {
  const onSearchMock = jest.fn();
  function Wrapper() {
    const [searchCity, setSearchCity] = React.useState("");
    return (
      <WeatherDisplay
        data={mockWeatherData}
        loading={false}
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        onSearch={onSearchMock}
      />
    );
  }
  render(<Wrapper />);
  return { onSearchMock };
}
