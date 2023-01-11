import React from "react";
import { useTheme } from "@rneui/themed";

import Box from "core/components/Box";
import ScrollContainer from "core/components/ScrollContainer";
import Spinner from "core/components/Spinner";

function LoadingScreen() {
  const { theme } = useTheme();

  return (
    <ScrollContainer>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        customStyle={{ backgroundColor: theme.colors.primary }}
      >
        <Spinner color={theme.colors.secondary} size="large" />
      </Box>
    </ScrollContainer>
  );
}

export default LoadingScreen;
