import React from "react";
import { Text } from "@rneui/base";
import { LocationObject } from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Container from "core/components/Container";
import Box from "core/components/Box";

import useWeatherInfo from "features/weather/hooks/useWeatherInfo";

import { BottomSheet } from "./WeatherBottomSheet.styles";

interface WeatherBottomSheetProps {
  location: LocationObject;
}

function WeatherBottomSheet({ location }: WeatherBottomSheetProps) {
  const bottomSheetRef = React.useRef(null);
  const { weatherInfo, loading, getWeatherInfo } = useWeatherInfo();

  React.useEffect(() => {
    if (loading) {
      return;
    }

    if (weatherInfo === null && location) {
      getWeatherInfo(location.coords);
    }
  }, [getWeatherInfo, loading, location, weatherInfo]);

  if (loading || weatherInfo === null) {
    return null;
  }

  return (
    <BottomSheet ref={bottomSheetRef}>
      <Container>
        <Box ph={32} flex={1}>
          <Box direction="row" justifyContent="space-around">
            <Box justifyContent="space-between" flex={1}>
              <Text h2>{weatherInfo.main.temp}°C</Text>
              <Text h3>{weatherInfo.region.city}</Text>
              <Text>
                {new Date().toDateString()} {weatherInfo.main.tempMin}°C/
                {weatherInfo.main.tempMax}°C
              </Text>
            </Box>
            <Box alignItems="center" justifyContent="center">
              <MaterialCommunityIcons
                name="weather-cloudy"
                size={72}
                color="black"
              />
              <Text h4>Nublado</Text>
            </Box>
          </Box>

          <Box flex={1} mt={40}>
            <Box direction="row">
              <Box flex={1}>
                <Text style={{ fontWeight: "bold" }}>Pressão</Text>
                <Text>{weatherInfo.main.pressure}hPa</Text>
              </Box>
              <Box justifyContent="center" alignItems="center">
                <Text style={{ fontWeight: "bold" }}>Sensação térmica</Text>
                <Text>{weatherInfo.main.feelsLike}°C</Text>
              </Box>
              <Box flex={1} justifyContent="flex-end" alignItems="flex-end">
                <Text style={{ fontWeight: "bold" }}>Umidade</Text>
                <Text>{weatherInfo.main.humidity}%</Text>
              </Box>
            </Box>

            <Box direction="row" mt={16}>
              <Box flex={1}>
                <Text style={{ fontWeight: "bold" }}>Nebulosidade</Text>
                <Text>{weatherInfo.clouds}%</Text>
              </Box>
              <Box justifyContent="center" alignItems="center">
                <Text style={{ fontWeight: "bold" }}>Vento</Text>
                <Text>{weatherInfo.wind.speed}m/s</Text>
              </Box>
              <Box flex={1} justifyContent="flex-end" alignItems="flex-end">
                <Text style={{ fontWeight: "bold" }}>Visibilidade</Text>
                <Text>{weatherInfo.visibility}km</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </BottomSheet>
  );
}

export default WeatherBottomSheet;
