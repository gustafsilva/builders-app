import React from "react";
import { observer } from "mobx-react-lite";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";

import ScrollScreenLayout from "core/layouts/ScrollScreenLayout";
import Content from "core/components/Content";
import Box from "core/components/Box";
import Button from "core/components/Button";
import Text from "core/components/Text";
import Spinner from "core/components/Spinner";

import useWeatherStats from "features/weather/hooks/useWeatherStats";
import WeatherBasicInfo from "features/weather/components/WeatherBasicInfo";
import WeatherResumeItem from "features/weather/components/WeatherResumeItem";
import WeatherIcon from "features/weather/components/WeatherIcon";

const WeatherResumeScreen = observer(() => {
  const {
    currentPositionStore,
    weatherForecastStore,
    weatherResumeStore,
    weatherForecastOfNextDays,
    refreshAll,
  } = useWeatherStats();
  const { theme } = useTheme();

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

  React.useEffect(() => {
    weatherForecastStore.refresh(currentPositionStore);
  }, []);

  return (
    <ScrollScreenLayout
      loading={weatherResumeStore.loading || weatherResumeStore.info === null}
      headerShown
      flexGrow={1}
    >
      <Content>
        <WeatherBasicInfo />

        {weatherForecastStore.loading || weatherForecastStore.info === null ? (
          <Box flex={1} justifyContent="center" alignItems="center">
            <Spinner />
          </Box>
        ) : (
          <React.Fragment>
            <Box
              flex={1}
              backgroundColor={theme.colors.primary}
              borderRadius={8}
              p="card"
              mt={24}
            >
              <Box mb={8}>
                <Box direction="row" pb={8}>
                  <Box mr={8}>
                    <MaterialCommunityIcons
                      name="calendar"
                      size={24}
                      color={theme.colors.secondary}
                    />
                  </Box>
                  <Text h4>Previsão para 5 dias</Text>
                </Box>
                <Box
                  height={0.8}
                  width="100%"
                  backgroundColor={theme.colors.tertiary}
                  opacity={0.4}
                  mt={8}
                />
              </Box>

              <Box>
                {weatherForecastOfNextDays !== null &&
                  weatherForecastOfNextDays.map((forecast, index) => (
                    <Box mb={8} key={forecast.date.toString()}>
                      <Box
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box
                          flex={1}
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text bold>
                            {forecast.date.toDate().toLocaleDateString()}
                          </Text>
                          <WeatherIcon id={forecast.id} size="small" />
                        </Box>

                        <Box
                          flex={1}
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="center"
                        >
                          <Text>{forecast.tempMinOfDay.toFixed(0)}°C</Text>
                          <Box
                            height={8}
                            borderRadius={8}
                            width="40%"
                            backgroundColor={theme.colors.tertiary}
                            mh={8}
                          />
                          <Text>{forecast.tempMaxOfDay.toFixed(0)}°C</Text>
                        </Box>
                      </Box>

                      {index < weatherForecastOfNextDays.length - 1 && (
                        <Box
                          height={0.8}
                          width="100%"
                          backgroundColor={theme.colors.tertiary}
                          opacity={0.4}
                          mt={8}
                        />
                      )}
                    </Box>
                  ))}
              </Box>
            </Box>
            <Box>
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

            <Box mt={24}>
              <Button onPress={refreshAll} size="lg">
                Atualizar
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Content>
    </ScrollScreenLayout>
  );
});

export default WeatherResumeScreen;
