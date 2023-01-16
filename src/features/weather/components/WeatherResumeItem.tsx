import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@rneui/themed";

import Box from "core/components/Box";
import Text from "core/components/Text";

interface WeatherResumeItemProps {
  title: string;
  icon: string;
  description: string;
}

function WeatherResumeItem({
  title,
  icon,
  description,
}: WeatherResumeItemProps) {
  const { theme } = useTheme();

  return (
    <Box
      flex={1}
      backgroundColor={theme.colors.primary}
      borderRadius={8}
      p={8}
      mh={2}
    >
      <Box direction="row" alignItems="center" mb={8}>
        <Box mr={2}>
          <MaterialCommunityIcons
            name={icon as any}
            size={24}
            color={theme.colors.secondary}
          />
        </Box>
        <Box flex={1}>
          <Text label>{title}</Text>
        </Box>
      </Box>
      <Text>{description}</Text>
    </Box>
  );
}

export default WeatherResumeItem;
