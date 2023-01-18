import { Moment } from "moment";

interface WeatherForest {
  id: number;
  date: Moment;
  description: string;
  temp: number;
  tempMin: number;
  tempMax: number;
}

export default WeatherForest;
