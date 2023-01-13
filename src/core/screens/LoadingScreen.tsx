import React from "react";
import { useTheme } from "@rneui/themed";

import ScrollContainer from "core/components/ScrollContainer";
import LinearGradientContainer from "core/components/LinearGradientContainer";
import Box from "core/components/Box";
import Spinner from "core/components/Spinner";

function LoadingScreen() {
  const { theme } = useTheme();

  return (
    <LinearGradientContainer>
      <ScrollContainer>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Spinner color={theme.colors.secondary} size="large" />
        </Box>
      </ScrollContainer>
    </LinearGradientContainer>
  );
}

export default LoadingScreen;
