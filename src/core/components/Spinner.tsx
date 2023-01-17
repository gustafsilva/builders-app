import React from "react";
import { Animated, Easing } from "react-native";
import { useTheme } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ONE_SECOND_IN_MS } from "core/configs/time";

interface SpinnerProps {
  color?: string;
  size?: number;
}

const Spinner = React.memo(({ color, size = 48 }: SpinnerProps) => {
  const { theme } = useTheme();
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: ONE_SECOND_IN_MS * 2,
      easing: Easing.bounce,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <MaterialCommunityIcons
        name="weather-sunny"
        size={size}
        color={color === undefined ? theme.colors.secondary : color}
      />
    </Animated.View>
  );
});

export default Spinner;
