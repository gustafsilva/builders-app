import React from "react";
import { useTheme } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import LoadingScreen from "core/screens/LoadingScreen";
import ScrollContainer from "core/components/ScrollContainer";
import LinearGradientContainer from "core/components/LinearGradientContainer";
import SafeAreaContainer from "core/components/SafeAreaContainer";
import Box from "core/components/Box";

interface ScrollScreenLayoutProps {
  loading?: boolean;
  headerShown?: boolean;
  children: React.ReactNode;
}

function ScrollScreenLayout({
  loading,
  headerShown,
  children,
}: ScrollScreenLayoutProps) {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <LinearGradientContainer>
      <ScrollContainer>
        <SafeAreaContainer>
          {headerShown && (
            <Box mt="view" ml="card">
              <TouchableOpacity onPress={goBack}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color={theme.colors.black}
                />
              </TouchableOpacity>
            </Box>
          )}
          {children}
        </SafeAreaContainer>
      </ScrollContainer>
    </LinearGradientContainer>
  );
}

export default ScrollScreenLayout;
