export interface WeatherDataTypes {
	name: string;
	main: { temp: number; humidity: number };
	sys: { country: string };
	weather: { main: string }[];
	wind: { speed: number };
}
