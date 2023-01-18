import React from "react";
import { useTheme } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Box from "core/components/Box";

function GenericScreenLayoutHeader() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <Box mt="view" ml="card">
      <TouchableOpacity onPress={goBack}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color={theme.colors.black}
        />
      </TouchableOpacity>
    </Box>
  );
}

export default GenericScreenLayoutHeader;
