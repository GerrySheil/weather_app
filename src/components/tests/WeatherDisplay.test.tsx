import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WeatherDisplay from "../WeatherDisplay";
import { mockWeatherData } from "../../mocks/weatherMocks";
import { renderWithStateAndMocks } from "../../test/testUtils";

test("renders weather data", () => {
  render(
    <WeatherDisplay
      data={mockWeatherData}
      loading={false}
      searchCity=""
      setSearchCity={() => {}}
      onSearch={() => {}}
    />
  );

  expect(screen.getByText("Dublin")).toBeInTheDocument();
  expect(screen.getByText("IE")).toBeInTheDocument();
  expect(screen.getByText("12°C")).toBeInTheDocument();
  expect(screen.getByText("Clouds")).toBeInTheDocument();
});

test("calls onSearch with entered city", async () => {
  const { onSearchMock } = renderWithStateAndMocks();

  const input = screen.getByPlaceholderText("Search...");
  await userEvent.type(input, "London");

  const searchButton = screen.getByRole("button", { name: /search/i });
  await userEvent.click(searchButton);

  expect(onSearchMock).toHaveBeenCalledTimes(1);
  expect(onSearchMock).toHaveBeenCalledWith("London");
});

test("calls onSearch with entered city after pressing enter key", async () => {
  const { onSearchMock } = renderWithStateAndMocks();

  const input = screen.getByPlaceholderText("Search...");
  await userEvent.type(input, "London{enter}");

  expect(onSearchMock).toHaveBeenCalledTimes(1);
  expect(onSearchMock).toHaveBeenCalledWith("London");
});

test("onSearch doesn't get called on an empty string", async () => {
  const { onSearchMock } = renderWithStateAndMocks();

  const searchButton = screen.getByRole("button", { name: /search/i });
  await userEvent.click(searchButton);

  expect(onSearchMock).toHaveBeenCalledTimes(0);
});

test("onSearch doesn't get called when a string is only whitespace", async () => {
  const { onSearchMock } = renderWithStateAndMocks();

  const input = screen.getByPlaceholderText("Search...");
  await userEvent.type(input, "  ");

  const searchButton = screen.getByRole("button", { name: /search/i });
  await userEvent.click(searchButton);

  expect(onSearchMock).toHaveBeenCalledTimes(0);
});

test("shows loading spinner when loading is true", () => {
  render(
    <WeatherDisplay
      data={mockWeatherData}
      loading={true}
      searchCity=""
      setSearchCity={() => {}}
      onSearch={() => {}}
    />
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders nothing if no data and not loading", () => {
  render(
    <WeatherDisplay
      data={null}
      loading={false}
      searchCity=""
      setSearchCity={() => {}}
      onSearch={() => {}}
    />
  );

  expect(screen.queryByText("Dublin")).not.toBeInTheDocument();
});

test("calls setSearchCity on user typing", async () => {
  const setSearchCityMock = jest.fn();
  render(
    <WeatherDisplay
      data={mockWeatherData}
      loading={false}
      searchCity=""
      setSearchCity={setSearchCityMock}
      onSearch={() => {}}
    />
  );

  const input = screen.getByPlaceholderText("Search...");
  await userEvent.type(input, "Paris");

  expect(setSearchCityMock).toHaveBeenCalledTimes(5); // "P", "a", "r", "i", "s"
});
