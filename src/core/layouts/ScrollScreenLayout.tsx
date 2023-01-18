import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import GenericScreenLayout, {
  GenericScreenLayoutProps,
} from "core/layouts/GenericScreenLayout";
import Container from "core/components/Container";
import LinearGradientContainer from "core/components/LinearGradientContainer";

interface ScrollScreenLayoutProps extends GenericScreenLayoutProps {
  flexGrow?: number;
  noBackgroundColor?: boolean;
}

function ScrollScreenLayout({
  noBackgroundColor = false,
  flexGrow = 0,
  ...props
}: ScrollScreenLayoutProps) {
  const contentContainerStyle = {
    flexGrow,
  };

  const ExternalContainer = noBackgroundColor
    ? Container
    : LinearGradientContainer;

  return (
    <ExternalContainer>
      <ScrollView contentContainerStyle={contentContainerStyle}>
        <GenericScreenLayout {...props} />
      </ScrollView>
    </ExternalContainer>
  );
}

export default ScrollScreenLayout;
