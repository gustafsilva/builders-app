import React from "react";
import { StatusBar } from "expo-status-bar";

import SafeAreaContainer from "core/components/SafeAreaContainer";
import Container from "core/components/Container";

import GenericScreenLayoutHeader from "./GenericScreenLayoutHeader";
import GenericScreenLayoutContent, {
  GenericScreenLayoutContentProps,
} from "./GenericScreenLayoutContent";

export interface GenericScreenLayoutProps
  extends GenericScreenLayoutContentProps {
  headerShown?: boolean;
  statusBarStyle?: "light" | "dark";
  safeArea?: boolean;
}

function GenericScreenLayout({
  headerShown,
  statusBarStyle = "light",
  safeArea = true,
  ...props
}: GenericScreenLayoutProps) {
  const ExternalContainer = safeArea ? SafeAreaContainer : Container;

  return (
    <ExternalContainer>
      {headerShown && <GenericScreenLayoutHeader />}
      <GenericScreenLayoutContent {...props} />
      <StatusBar style={statusBarStyle} />
    </ExternalContainer>
  );
}

export default GenericScreenLayout;
