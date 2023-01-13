interface WeatherInfo {
  region: {
    country: string;
    city: string;
  };
  weather: {
    id: number;
    description: string;
  };
  main: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  clouds: number;
  timezone: string;
}

export default WeatherInfo;
