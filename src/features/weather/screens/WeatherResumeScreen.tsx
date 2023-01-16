import React from "react";
import { observer } from "mobx-react-lite";

import ScrollScreenLayout from "core/layouts/ScrollScreenLayout";
import Content from "core/components/Content";
import Box from "core/components/Box";
import Button from "core/components/Button";

import useWeatherResume from "features/weather/hooks/useWeatherResume";
import WeatherBasicInfo from "features/weather/components/WeatherBasicInfo";
import WeatherResumeItem from "features/weather/components/WeatherResumeItem";

const WeatherResumeScreen = observer(() => {
  const { weatherResumeStore, refresh } = useWeatherResume();

  const infos = React.useMemo(() => {
    if (weatherResumeStore.info === null) {
      return null;
    }

    return [
      [
        {
          title: "Pressão",
          icon: "speedometer-medium",
          description: `${weatherResumeStore.info.main.pressure}hPa`,
        },
        {
          title: "Sensação térmica",
          icon: "thermometer",
          description: `${weatherResumeStore.info.main.feelsLike.toFixed(0)}°C`,
        },
      ],
      [
        {
          title: "Umidade",
          icon: "water-outline",
          description: `${weatherResumeStore.info.main.humidity}%`,
        },
        {
          title: "Nebulosidade",
          icon: "weather-cloudy",
          description: `${weatherResumeStore.info.clouds}%`,
        },
      ],
      [
        {
          title: "Vento",
          icon: "weather-windy",
          description: `${weatherResumeStore.info.wind.speed}m/s`,
        },
        {
          title: "Visibilidade",
          icon: "eye",
          description: `${weatherResumeStore.info.visibility}km`,
        },
      ],
    ];
  }, [weatherResumeStore.info]);

  return (
    <ScrollScreenLayout
      loading={weatherResumeStore.loading || weatherResumeStore.info === null}
      headerShown
    >
      {weatherResumeStore.info !== null && (
        <Content>
          <WeatherBasicInfo />

          <Box flex={1}>
            {infos?.map((info, key) => (
              <Box direction="row" mt={16} key={key}>
                <WeatherResumeItem
                  title={info[0].title}
                  icon={info[0].icon}
                  description={info[0].description}
                />
                <WeatherResumeItem
                  title={info[1].title}
                  icon={info[1].icon}
                  description={info[1].description}
                />
              </Box>
            ))}
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
