import { Coordinates } from "./common.type.js";

type PeriodOfTime = "Day" | "Night";

interface WeatherRequest extends Coordinates {}
interface WeatherData {
  unixTimestamp: number;
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
  feelsLikeTemperature: number;
  humidity: number;
  visibility: number;
  weather: string;
  cloud: number;
  windSpeed: number;
  icon: string;
  rain?: number;
  snow?: number;
}

interface WeatherForecastData extends WeatherData {
  PoP: number;
  periodOfTime: PeriodOfTime;
}

interface CurrentWeatherResponse {
  country: string;
  city: string;
  data: WeatherData;
}

interface WeatherForecastResponse {
  country: string;
  city: string;
  data: WeatherForecastData[];
}

export type { CurrentWeatherResponse, WeatherForecastResponse, WeatherData, WeatherRequest, WeatherForecastData, PeriodOfTime };
