import React from "react";
import { useTheme } from "@rneui/themed";

import Box from "core/components/Box";
import Spinner from "core/components/Spinner";

export interface GenericScreenLayoutContentProps {
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
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner color={theme.colors.secondary} />
      </Box>
    );
  }

  return children;
}

export default GenericScreenLayoutContent;
