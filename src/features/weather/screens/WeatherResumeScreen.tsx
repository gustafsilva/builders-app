import React from "react";
import { observer } from "mobx-react-lite";

import ScrollScreenLayout from "core/layouts/ScrollScreenLayout";
import Content from "core/components/Content";
import Box from "core/components/Box";
import Text from "core/components/Text";
import Button from "core/components/Button";

import useWeatherResume from "features/weather/hooks/useWeatherResume";
import WeatherBasicInfo from "features/weather/components/WeatherBasicInfo";

const WeatherResumeScreen = observer(() => {
  const { weatherResumeStore, refresh } = useWeatherResume();

  return (
    <ScrollScreenLayout
      loading={weatherResumeStore.loading || weatherResumeStore.info === null}
      headerShown
    >
      {weatherResumeStore.info !== null && (
        <Content>
          <WeatherBasicInfo />

          <Box flex={1}>
            <Box direction="row" mt={32}>
              <Box flex={1}>
                <Text label>Pressão</Text>
                <Text>{`${weatherResumeStore.info.main.pressure}hPa`}</Text>
              </Box>
              <Box justifyContent="center" alignItems="center">
                <Text label>Sensação térmica</Text>
                <Text>{`${weatherResumeStore.info.main.feelsLike.toFixed(
                  0
                )}°C`}</Text>
              </Box>
              <Box flex={1} justifyContent="flex-end" alignItems="flex-end">
                <Text label>Umidade</Text>
                <Text>{`${weatherResumeStore.info.main.humidity}%`}</Text>
              </Box>
            </Box>

            <Box direction="row" mt={16}>
              <Box flex={1}>
                <Text label>Nebulosidade</Text>
                <Text>{`${weatherResumeStore.info.clouds}%`}</Text>
              </Box>
              <Box justifyContent="center" alignItems="center">
                <Text label>Vento</Text>
                <Text>{`${weatherResumeStore.info.wind.speed}m/s`}</Text>
              </Box>
              <Box flex={1} justifyContent="flex-end" alignItems="flex-end">
                <Text label>Visibilidade</Text>
                <Text>{`${weatherResumeStore.info.visibility}km`}</Text>
              </Box>
            </Box>
          </Box>

          <Button onPress={refresh} size="lg">
            Atualizar
          </Button>
        </Content>
      )}
    </ScrollScreenLayout>
  );
});

export default WeatherResumeScreen;
