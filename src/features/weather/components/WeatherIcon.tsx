import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";

interface WeatherIconProps {
  id: number;
  size?: "large" | "small";
}

function WeatherIcon({ id, size = "large" }: WeatherIconProps) {
  const { theme } = useTheme();

  // More info about Weather ID: https://openweathermap.org/weather-conditions
  const name = React.useMemo(() => {
    // Clouds
    if (id >= 801 && id <= 804) {
      return "weather-cloudy";
    }
    // Clear
    if (id === 800) {
      return "weather-sunny";
    }
    // Atmosphere
    if (id >= 701 && id <= 781) {
      return "weather-tornado";
    }
    // Snow
    if (id >= 600 && id <= 622) {
      return "weather-snowy";
    }
    // Rain
    if (id >= 500 && id <= 531) {
      return "weather-pouring";
    }
    // Drizzle
    if (id >= 300 && id <= 321) {
      return "weather-rainy";
    }
    // Thunderstorm
    if (id >= 200 && id <= 232) {
      return "weather-lightning-rainy";
    }

    return "alert-outline";
  }, [id]);

  return (
    <MaterialCommunityIcons
      name={name}
      size={size && size === "small" ? 40 : 80}
      color={theme.colors.secondary}
    />
  );
}

export default WeatherIcon;
