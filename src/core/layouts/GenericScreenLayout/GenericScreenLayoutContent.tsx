import React from "react";
import { useTheme } from "@rneui/themed";

import Box from "core/components/Box";
import Spinner from "core/components/Spinner";
import { ViewProps } from "react-native";

import LinearGradientContainer from "core/components/LinearGradientContainer";

export interface GenericScreenLayoutContentProps extends ViewProps {
  loading?: boolean;
  children: React.ReactElement;
}

function GenericScreenLayoutContent({
  loading,
  children,
}: GenericScreenLayoutContentProps) {
  const { theme } = useTheme();

  if (loading) {
    return (
      <LinearGradientContainer>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Spinner color={theme.colors.secondary} />
        </Box>
      </LinearGradientContainer>
    );
  }

  return children;
}

export default GenericScreenLayoutContent;
