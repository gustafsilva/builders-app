import React from "react";
import CountryFlag from "react-native-country-flag";

import Box from "core/components/Box";
import Text from "core/components/Text";

import { useWeatherStore } from "features/weather/store";
import WeatherIcon from "features/weather/components/WeatherIcon";

function WeatherBasicInfo() {
  const { weatherResumeStore } = useWeatherStore();

  if (weatherResumeStore.loading || weatherResumeStore.info === null) {
    return null;
  }

  return (
    <Box direction="row" justifyContent="space-around">
      <Box justifyContent="space-between" flex={1}>
        <Text h1>{weatherResumeStore.info.main.temp.toFixed(0)}°C</Text>
        <Box
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          mr={48}
        >
          <Text numberOfLines={1} h3>
            {weatherResumeStore.info.region.city}
          </Text>
          <Box ml={8}>
            <CountryFlag
              isoCode={weatherResumeStore.info.region.country}
              size={16}
            />
          </Box>
        </Box>
        <Text>
          {new Date().toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          {weatherResumeStore.info.main.tempMin.toFixed(0)}°C/
          {weatherResumeStore.info.main.tempMax.toFixed(0)}°C
        </Text>
      </Box>
      <Box alignItems="center">
        <WeatherIcon id={weatherResumeStore.info.weather.id} />
        <Text h4>
          {weatherResumeStore.info.weather.description.toUpperCase()}
        </Text>
      </Box>
    </Box>
  );
}

export default WeatherBasicInfo;
