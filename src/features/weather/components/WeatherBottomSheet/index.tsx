import React from "react";
import CountryFlag from "react-native-country-flag";

import Coords from "core/types/coords";
import LinearGradientContainer from "core/components/LinearGradientContainer";
import Container from "core/components/Container";
import Box from "core/components/Box";
import Text from "core/components/Text";

import useWeatherInfo from "features/weather/hooks/useWeatherInfo";
import WeatherIcon from "features/weather/components/WeatherIcon";

import { BottomSheet } from "./WeatherBottomSheet.styles";

interface WeatherBottomSheetProps {
  coords: Coords;
}

function WeatherBottomSheet({ coords }: WeatherBottomSheetProps) {
  const bottomSheetRef = React.useRef(null);
  const { weatherInfo, loading, getWeatherInfo } = useWeatherInfo();

  React.useEffect(() => {
    if (loading) {
      return;
    }

    if (weatherInfo === null && coords) {
      getWeatherInfo(coords);
    }
  }, [getWeatherInfo, loading, coords, weatherInfo]);

  if (loading || weatherInfo === null) {
    return null;
  }

  return (
    <BottomSheet ref={bottomSheetRef}>
      <LinearGradientContainer>
        <Container>
          <Box ph="view" flex={1}>
            <Box direction="row" justifyContent="space-around">
              <Box justifyContent="space-between" flex={1}>
                <Text h1>{weatherInfo.main.temp.toFixed(0)}°C</Text>
                <Box
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  mr={48}
                >
                  <Text numberOfLines={1} h3>
                    {weatherInfo.region.city}
                  </Text>
                  <Box ml={8}>
                    <CountryFlag
                      isoCode={weatherInfo.region.country}
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
                  {weatherInfo.main.tempMin.toFixed(0)}°C/
                  {weatherInfo.main.tempMax.toFixed(0)}°C
                </Text>
              </Box>
              <Box alignItems="center">
                <WeatherIcon id={weatherInfo.weather.id} />
                <Text h4>{weatherInfo.weather.description.toUpperCase()}</Text>
              </Box>
            </Box>

            <Box flex={1} mv={32}>
              <Box direction="row">
                <Box flex={1}>
                  <Text label>Pressão</Text>
                  <Text>{`${weatherInfo.main.pressure}hPa`}</Text>
                </Box>
                <Box justifyContent="center" alignItems="center">
                  <Text label>Sensação térmica</Text>
                  <Text>{`${weatherInfo.main.feelsLike.toFixed(0)}°C`}</Text>
                </Box>
                <Box flex={1} justifyContent="flex-end" alignItems="flex-end">
                  <Text label>Umidade</Text>
                  <Text>{`${weatherInfo.main.humidity}%`}</Text>
                </Box>
              </Box>

              <Box direction="row" mt={16}>
                <Box flex={1}>
                  <Text label>Nebulosidade</Text>
                  <Text>{`${weatherInfo.clouds}%`}</Text>
                </Box>
                <Box justifyContent="center" alignItems="center">
                  <Text label>Vento</Text>
                  <Text>{`${weatherInfo.wind.speed}m/s`}</Text>
                </Box>
                <Box flex={1} justifyContent="flex-end" alignItems="flex-end">
                  <Text label>Visibilidade</Text>
                  <Text>{`${weatherInfo.visibility}km`}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </LinearGradientContainer>
    </BottomSheet>
  );
}

export default WeatherBottomSheet;
